from flask import Flask
from flask_cors import CORS
from mongoengine import connect
from app.controllers.auth_controller import auth_bp

def create_app():
    app = Flask(__name__)
    CORS(app)

    connect(db="solecare", host="mongodb://localhost:27017/solecare")

    app.register_blueprint(auth_bp, url_prefix="/auth")

    return app
