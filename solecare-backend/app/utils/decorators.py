from functools import wraps
from flask import jsonify
from app.utils.jwt_utils import decode_token

def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        try:
            decode_token()
        except ValueError as e:
            return jsonify({"success": False, "error": str(e)}), 401
        return f(*args, **kwargs)
    return decorated
