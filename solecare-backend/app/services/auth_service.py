from app.models.user import User
from app.utils.jwt_utils import generate_token
import bcrypt
import uuid
from mongoengine.errors import NotUniqueError

class AuthService:

    @staticmethod
    def register(data):
        if data.password != data.confirmPassword:
            return False, "Passwords do not match"

        # Encrypt user password
        hashed = bcrypt.hashpw(data.password.encode(), bcrypt.gensalt())

        # Generate user id
        user_id = str(uuid.uuid4())

        try:
            User(
                user_id=user_id,
                name=data.name,
                email=data.email,
                password=hashed.decode(),
                role=data.role
            ).save()
            return True, None
        except NotUniqueError:
            return False, "User with this email already exists"

    @staticmethod
    def login(data):
        user = User.objects(email=data.email).first()
        if not user:
            return None, "User not found"

        if not bcrypt.checkpw(data.password.encode(), user.password.encode()):
            return None, "Unauthorized"

        token = generate_token(user.user_id, user.email, user.role)

        return {
            "name": user.name,
            "email": user.email,
            "role": user.role,
            "token": token
        }, None
