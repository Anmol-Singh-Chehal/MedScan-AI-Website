from pymongo import MongoClient
from app.config.settings import settings


client = MongoClient(settings.MONGODB_URI)

db = client[settings.MONGODB_DATABASE]

users_collection = db["users"]
scans_collection = db["scans"]
revoked_tokens_collection = db["revoked_tokens"]

users_collection.create_index(
    "email",
    unique=True
)

scans_collection.create_index(
    [("user_id", 1), ("created_at", -1)]
)

revoked_tokens_collection.create_index(
    "jti",
    unique=True
)