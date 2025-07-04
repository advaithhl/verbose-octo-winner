from mongoengine import (
    Document,
    EmbeddedDocument,
    StringField,
    DateTimeField,
    ListField,
    EmbeddedDocumentField,
    FloatField,
)


QUESTION_TYPES = ('radio', 'checkbox', 'text', 'number', 'scale')
LANGUAGES = ('de', 'en')
QUESTIONNAIRE_TYPES = ('pre', 'post')


class QuestionnaireResponse(EmbeddedDocument):
    id = StringField(required=True)
    value = ListField(StringField(), default=None, null=True)
    completed_at = DateTimeField(required=True)
    question_type = StringField(required=True, choices=QUESTION_TYPES)


class QuestionnaireSubmission(Document):
    submission_id = StringField(required=True, unique=True)
    user_id = StringField(required=True)
    questionnaire_type = StringField(required=True, choices=QUESTIONNAIRE_TYPES)
    started_at = DateTimeField(required=True)
    completed_at = DateTimeField(required=True)
    completion_time_minutes = FloatField(required=True)
    language = StringField(required=True, choices=LANGUAGES)
    responses = ListField(EmbeddedDocumentField(QuestionnaireResponse))

    meta = {
        'collection': 'questionnaire_submissions',
        'indexes': ['submission_id', 'user_id']
    }
