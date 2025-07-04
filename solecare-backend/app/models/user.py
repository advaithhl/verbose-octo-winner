from mongoengine import Document, ListField, ReferenceField, StringField
from app.models.questionnaire import QuestionnaireSubmission

class User(Document):
    user_id = StringField(required=True)
    name = StringField(required=True)
    email = StringField(required=True, unique=True)
    password = StringField(required=True)
    role = StringField(required=True)
    pre_mos = ReferenceField(QuestionnaireSubmission, required=False)
    post_mos = ListField(ReferenceField(QuestionnaireSubmission), required=False)
