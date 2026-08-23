import io

import torch

from PIL import Image

from torchvision import transforms

from app.ml.model_loader import DEVICE


# ============================================================
# Class names
# ============================================================

FRACTURE_CLASSES = [
    "Fracture",
    "Normal"
]


TUMOR_CLASSES = [
    "glioma_tumor",
    "meningioma_tumor",
    "no_tumor",
    "pituitary_tumor"
]


CANCER_CLASSES = [
    "adenocarcinoma",
    "large_cell_carcinoma",
    "normal",
    "squamous_cell_carcinoma"
]


TB_CLASSES = [
    "Normal",
    "Tuberculosis"
]


# ============================================================
# Image preprocessing
# ============================================================

def get_transforms():

    return transforms.Compose([

        transforms.Resize(
            (224, 224)
        ),

        transforms.ToTensor(),

        transforms.Normalize(

            mean=[
                0.485,
                0.456,
                0.406
            ],

            std=[
                0.229,
                0.224,
                0.225
            ]
        )
    ])


transform = get_transforms()


# ============================================================
# Read frontend image
# ============================================================

async def preprocess_image(upload_file):

    image_bytes = await upload_file.read()

    try:

        image = Image.open(
            io.BytesIO(image_bytes)
        ).convert("RGB")

    except Exception:

        raise ValueError(
            "Invalid image file."
        )

    tensor = transform(image)

    # Add batch dimension:
    #
    # [3, 224, 224]
    #
    # becomes
    #
    # [1, 3, 224, 224]

    tensor = tensor.unsqueeze(0)

    tensor = tensor.to(DEVICE)

    return tensor


# ============================================================
# Prediction helper
# ============================================================

def predict_with_model(
    model,
    image_tensor,
    class_names
):

    with torch.inference_mode():

        logits = model(image_tensor)

        probabilities = torch.softmax(
            logits,
            dim=1
        )

    probabilities = probabilities[0]

    predicted_index = torch.argmax(
        probabilities
    ).item()

    predicted_class = class_names[
        predicted_index
    ]

    predicted_confidence = (
        probabilities[predicted_index].item()
        * 100
    )

    # --------------------------------------------------------
    # All class confidence
    # --------------------------------------------------------

    class_confidence = {}

    for index, class_name in enumerate(
        class_names
    ):

        class_confidence[class_name] = round(
            probabilities[index].item() * 100,
            2
        )

    return {
        "predicted_class": predicted_class,

        "class_index": predicted_index,

        "confidence": round(
            predicted_confidence,
            2
        ),

        "class_confidence": class_confidence
    }


# ============================================================
# Fracture prediction
# ============================================================

async def predict_fracture(
    upload_file,
    model
):

    image_tensor = await preprocess_image(
        upload_file
    )

    return predict_with_model(
        model,
        image_tensor,
        FRACTURE_CLASSES
    )


# ============================================================
# Tumor prediction
# ============================================================

async def predict_tumor(
    upload_file,
    model
):

    image_tensor = await preprocess_image(
        upload_file
    )

    return predict_with_model(
        model,
        image_tensor,
        TUMOR_CLASSES
    )


# ============================================================
# Lung cancer prediction
# ============================================================

async def predict_cancer(
    upload_file,
    model
):

    image_tensor = await preprocess_image(
        upload_file
    )

    return predict_with_model(
        model,
        image_tensor,
        CANCER_CLASSES
    )


# ============================================================
# TB prediction
# ============================================================

async def predict_tb(
    upload_file,
    model
):

    image_tensor = await preprocess_image(
        upload_file
    )

    return predict_with_model(
        model,
        image_tensor,
        TB_CLASSES
    )