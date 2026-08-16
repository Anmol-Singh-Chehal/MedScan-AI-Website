from fastapi import FastAPI
from app.database.mongodb import client

app = FastAPI(
    title="MedScan AI",
    description="Medical imaging AI backend",
    version="1.0.0"
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