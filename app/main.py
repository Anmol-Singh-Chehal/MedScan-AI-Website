from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from app.database.mongodb import client
from app.services.cloudinary_service import upload_image
from app.auth.routes import router as auth_router

app = FastAPI(
    title="MedScan AI",
    description="Medical imaging AI backend",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    auth_router
)

@app.get("/")
def root():
    return {
        "message": "MedScan AI API is running"
    }


@app.get("/health")
def health_check():
    try:
        client.admin.command("ping")

        return {
            "status": "healthy",
            "database": "connected"
        }

    except Exception as e:
        return {
            "status": "unhealthy",
            "database": "disconnected",
            "error": str(e)
        }

@app.post("/upload")
async def upload_images(
    images: list[UploadFile] = File(...)
):

    uploaded_files = []

    for file in images:

        result = upload_image(file)

        uploaded_files.append({
            "filename": file.filename,
            "content_type": file.content_type,
            "cloudinary": result
        })

    return {
        "message": "Files uploaded successfully",
        "files": uploaded_files
    }