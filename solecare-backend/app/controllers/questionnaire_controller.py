from flask import Blueprint, request, jsonify
from app.services.questionnaire_service import QuestionnaireService

questionnaire_bp = Blueprint('questionnaire', __name__)


@questionnaire_bp.route('/pre', methods=['POST'])
def submit_pre_questionnaire():
    data = request.json
    result, status = QuestionnaireService.create_questionnaire_submission(data)
    return jsonify(result), status


@questionnaire_bp.route('/post', methods=['POST'])
def submit_post_questionnaire():
    data = request.json
    result, status = QuestionnaireService.create_questionnaire_submission(data)
    return jsonify(result), status
