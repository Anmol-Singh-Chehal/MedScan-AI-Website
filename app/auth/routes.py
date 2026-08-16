from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Form,
    HTTPException,
    status
)
from datetime import datetime, timezone
from app.auth.password import (
    hash_password,
    verify_password
)
from pymongo.errors import DuplicateKeyError
from app.database.mongodb import users_collection
from app.auth.password import hash_password
from app.services.cloudinary_service import upload_image
from app.auth.jwt import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/sign-up")
async def signup(
    profile_photo: UploadFile = File(...),
    full_name: str = Form(...),
    email: str = Form(...),
    password: str = Form(...),
    accepts_terms: bool = Form(...)
):


    full_name = full_name.strip()
    email = email.strip().lower()

    if not full_name:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Full name is required"
        )

    if not email:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email is required"
        )

    if len(password) < 8:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Password must be at least 8 characters long"
        )

    if not accepts_terms:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="You must accept the terms and policies"
        )

    existing_user = users_collection.find_one(
        {
            "email": email
        }
    )

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already present"
        )

    hashed_password = hash_password(
        password
    )

    user = {
        "full_name": full_name,
        "email": email,
        "password": hashed_password,
        "accepts_terms": accepts_terms,
        "created_at": datetime.now(timezone.utc)
    }


    try:
        result = users_collection.insert_one(
            user
        )

    except DuplicateKeyError:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Email already present"
        )


    user_id = str(
        result.inserted_id
    )

    try:
        profile_result = upload_image(
            profile_photo,
            f"medscan-ai/users/{user_id}/profile"
        )

    except Exception:
        users_collection.delete_one(
            {
                "_id": result.inserted_id
            }
        )

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to upload profile photo"
        )

    users_collection.update_one(
        {
            "_id": result.inserted_id
        },
        {
            "$set": {
                "profile_photo": profile_result
            }
        }
    )

    access_token = create_access_token(
        user_id
    )

    return {

        "message": "User successfully registered",
        "access_token": access_token,
        "token_type": "bearer",
        "expires_in_days": 7,
        "user": {
            "id": user_id,
            "full_name": full_name,
            "email": email,
            "profile_photo": profile_result["url"]
        }
    }


@router.post("/log-in")
async def login(
    email: str = Form(...),
    password: str = Form(...)
):

    email = email.strip().lower()

    user = users_collection.find_one(
        {
            "email": email
        }
    )

    if not user:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    password_valid = verify_password(
        password,
        user["password"]
    )

    if not password_valid:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    access_token = create_access_token(
        str(user["_id"])
    )

    return {
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer",
        "expires_in_days": 7,
        "user": {
            "id": str(user["_id"]),
            "full_name": user["full_name"],
            "email": user["email"],
            "profile_photo": user.get(
                "profile_photo",
                {}
            ).get("url")
        }
    }