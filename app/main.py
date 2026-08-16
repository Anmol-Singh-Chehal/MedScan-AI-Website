from fastapi import FastAPI

app = FastAPI(
    title="Medscan AI",
    description="Backend API for Medscan AI",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "Medscan AI API is running"
    }