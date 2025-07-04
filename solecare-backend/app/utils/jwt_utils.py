import jwt
from flask import request
from jwt import InvalidTokenError

SECRET_KEY = "your_secret_key"  # Preferably from env

def generate_token(user_id, email, role):
    payload = {
        "sub": str(user_id),
        "email": email,
        "role": role,
    }
    return jwt.encode(payload, SECRET_KEY, algorithm="HS256")


# Must be used in a Flask request context.
# You should probably use the @login_required decorator instead.
def decode_token():
    auth_header = request.headers.get('Authorization', None)

    if not auth_header or not auth_header.startswith('Bearer '):
        raise ValueError("Missing or invalid Authorization header")

    token = auth_header.split(" ")[1]

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return payload.get("sub")
    except InvalidTokenError as e:
        raise ValueError(f"Invalid token: {str(e)}")
