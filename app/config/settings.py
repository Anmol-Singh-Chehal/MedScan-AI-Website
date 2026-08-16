import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    MONGODB_URI: str = os.getenv("MONGODB_URI", "")
    MONGODB_DATABASE: str = os.getenv(
        "MONGODB_DATABASE",
        "medscan-ai"
    )


settings = Settings()