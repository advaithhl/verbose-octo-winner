import jwt
from datetime import datetime, timedelta, timezone

SECRET_KEY = "your_secret_key"  # Preferably from env

def generate_token(user_id, email, role):
    payload = {
        "sub": str(user_id),
        "email": email,
        "role": role,
        "exp": datetime.now(timezone.utc) + timedelta(days=1)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm="HS256")
