from flask import Blueprint, request, jsonify
from app.services.questionnaire_service import QuestionnaireService
from app.utils.jwt_utils import decode_token

questionnaire_bp = Blueprint('questionnaire', __name__)


@questionnaire_bp.route('/pre', methods=['POST'])
def submit_pre_questionnaire():
    # TODO: just printing token for now
    user_id = decode_token(request.headers)
    print(f'User ID: {user_id}')
    data = request.json
    result, status = QuestionnaireService.create_questionnaire_submission(data)
    return jsonify(result), status


@questionnaire_bp.route('/post', methods=['POST'])
def submit_post_questionnaire():
    data = request.json
    result, status = QuestionnaireService.create_questionnaire_submission(data)
    return jsonify(result), status
