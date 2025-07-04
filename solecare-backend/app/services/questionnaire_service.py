from app.models.questionnaire import QuestionnaireResponse, QuestionnaireSubmission
from datetime import datetime
from mongoengine.errors import ValidationError


class QuestionnaireService:

    @classmethod
    def create_questionnaire_submission(cls, data):
        submission_id = data['submissionId']

        try:
            submission = QuestionnaireSubmission(
                submission_id=submission_id,
                questionnaire_type=data['questionnaireType'],
                started_at=datetime.fromisoformat(data['startedAt']),
                completed_at=datetime.fromisoformat(data['completedAt']),
                completion_time_minutes=data['completionTimeMinutes'],
                language=data['language'],
                responses=cls._parse_questionnaire_responses(data['responses'])
            )
            submission.save()

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
