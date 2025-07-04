from app.models.questionnaire import QuestionnaireResponse, QuestionnaireSubmission
from app.models.user import User
from app.utils.jwt_utils import decode_token
from datetime import datetime
from mongoengine.errors import ValidationError


class QuestionnaireService:

    @classmethod
    def create_questionnaire_submission(cls, data):
        submission_id = data['submissionId']
        questionnaire_type = data['questionnaireType']

        try:
            user_id = decode_token()
            user = User.objects(user_id=user_id).first()
            if not user:
                return {"success": False, "error": "User not found"}, 404

            submission = QuestionnaireSubmission(
                submission_id=submission_id,
                questionnaire_type=questionnaire_type,
                started_at=datetime.fromisoformat(data['startedAt']),
                completed_at=datetime.fromisoformat(data['completedAt']),
                completion_time_minutes=data['completionTimeMinutes'],
                language=data['language'],
                responses=cls._parse_questionnaire_responses(data['responses'])
            )
            submission.save()

            if questionnaire_type == 'pre':
                user.pre_mos = submission
            elif questionnaire_type == 'post':
                user.post_mos.append(submission)

            user.save()

            return {"success": True, "submissionId": submission_id}, 201

        except (KeyError, ValidationError) as e:
            return {"success": False, "error": str(e)}, 400
        except Exception as e:
            return {"success": False, "error": str(e)}, 500

    @classmethod
    def _parse_questionnaire_response(cls, data: dict):
        value = data.get('value')

        # Normalize to list
        if isinstance(value, str):
            value = [value]
        elif isinstance(value, list):
            value = [str(v) for v in value]
        else:
            value = None

        return QuestionnaireResponse(
            id=data['id'],
            value=value,
            completed_at=datetime.fromisoformat(data['completedAt']),
            question_type=data['questionType']
        )

    @classmethod
    def _parse_questionnaire_responses(cls, responses_data):
        return [cls._parse_questionnaire_response(res) for res in responses_data]
