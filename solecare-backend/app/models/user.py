from mongoengine import Document, StringField

class User(Document):
    user_id = StringField(required=True)
    name = StringField(required=True)
    email = StringField(required=True, unique=True)
    password = StringField(required=True)
    role = StringField(required=True)
