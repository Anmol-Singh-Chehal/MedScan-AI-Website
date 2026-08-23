from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Request,
    Depends,
    HTTPException
)

from app.auth.dependencies import get_current_user

from app.ml.predictor import (
    predict_fracture,
    predict_tumor,
    predict_cancer,
    predict_tb
)

router = APIRouter(
    prefix="/detection",
    tags=["detection"]
)


@router.post("/fracture")
async def fracture_detection(
    request: Request,
    images: list[UploadFile] = File(...),
    current_user=Depends(get_current_user)
):
    try:
        model = request.app.state.models["fracture"]

        result = await predict_fracture(
            images,
            model
        )

        return {
            "success": True,
            "disease_type": "fracture",
            **result
        }

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

    except Exception as e:
        print(f"Fracture prediction error: {e}")

        raise HTTPException(
            status_code=500,
            detail="Fracture prediction failed."
        )

@router.post("/tumor")
async def tumor_detection(
    request: Request,
    images: list[UploadFile] = File(...),
    current_user=Depends(get_current_user)
):
    try:
        model = request.app.state.models["tumor"]

        result = await predict_tumor(
            images,
            model
        )

        return {
            "success": True,
            "disease_type": "brain_tumor",
            **result
        }

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

    except Exception as e:
        print(f"Tumor prediction error: {e}")

        raise HTTPException(
            status_code=500,
            detail="Tumor prediction failed."
        )

@router.post("/cancer")
async def cancer_detection(
    request: Request,
    images: list[UploadFile] = File(...),
    current_user=Depends(get_current_user)
):
    try:
        model = request.app.state.models["cancer"]

        result = await predict_cancer(
            images,
            model
        )

        return {
            "success": True,
            "disease_type": "lung_cancer",
            **result
        }

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

    except Exception as e:
        print(f"Cancer prediction error: {e}")

        raise HTTPException(
            status_code=500,
            detail="Lung cancer prediction failed."
        )

@router.post("/tb")
async def tb_detection(
    request: Request,
    images: list[UploadFile] = File(...),
    current_user=Depends(get_current_user)
):
    try:
        model = request.app.state.models["tb"]

        result = await predict_tb(
            images,
            model
        )

        return {
            "success": True,
            "disease_type": "tuberculosis",
            **result
        }

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e)
        )

    except Exception as e:
        print(f"TB prediction error: {e}")

        raise HTTPException(
            status_code=500,
            detail="TB prediction failed."
        )
