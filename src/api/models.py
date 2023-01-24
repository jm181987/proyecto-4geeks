from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(150), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    profile_picture_id = db.Column(db.Integer, db.ForeignKey("imagen.id"))
    profile_picture = db.relationship("Imagen")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class TokenBlockedList(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    token=db.Column(db.String(200), unique=True, nullable=False)
    email=db.Column(db.String(200), nullable=False, index=True)
    created_at = db.Column(db.DateTime, nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "token":self.token,
            "email":self.email,
            "created_at":self.created_at
        }


class Artist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    type_music = db.Column(db.String(80), unique=False, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    artist_picture_id = db.Column(db.Integer, db.ForeignKey("imagen.id"))
    artist_picture = db.relationship("Imagen")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Imagen(db.Model):
    __tablename__ = "imagen"
    id = db.Column(db.Integer, primary_key=True)
    resource_path = db.Column(db.String(250), unique=True, nullable=False)
    description = db.Column(db.String(200))


