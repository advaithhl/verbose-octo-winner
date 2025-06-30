from flask import Blueprint, request, jsonify
from app.dtos.user_dto import RegisterDTO, LoginDTO
from app.services.auth_service import AuthService

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.json
    dto = RegisterDTO(**data)
    success, error = AuthService.register(dto)
    if success:
        return jsonify({}), 201
    return jsonify({"error": error}), 400

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    dto = LoginDTO(**data)
    result, error = AuthService.login(dto)
    if result:
        return jsonify(result), 200
    if error == "User not found":
        return jsonify({"error": error}), 404
    return jsonify({"error": error}), 401
