"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from datetime import datetime, timezone, timedelta
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, TokenBlockedList
from api.utils import generate_sitemap, APIException
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token,create_refresh_token, jwt_required, get_jwt_identity,get_jwt
from flask_sqlalchemy import SQLAlchemy

api = Blueprint('api', __name__)
bcrypt = Bcrypt(Flask(__name__))
jwt = JWTManager(Flask(__name__))


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# Registro: endpoint que reciba un nombre de usuario y clave, y lo registre en la base de datos
@api.route('/signup', methods=['POST'])
def singup():
    email=request.json.get("email")
    password=request.json.get("password")
    password_encryptado = bcrypt.generate_password_hash(password, rounds=None).decode("utf-8")
    newUser=User(email=email,password=password_encryptado,is_active=True)
    db.session.add(newUser)
    db.session.commit()
    response_body = {
        "message": "Usuario creado exitosamente"
    }

    return jsonify(response_body), 201

# Login: endpoint que reciba un nombre de usuario y clave, lo verifique en la base de datos y genere el token
@api.route('/login', methods=['POST'])
def login():
    email=request.json.get("email")
    password=request.json.get("password")
    newUser=User.query.filter_by(email=email).first()
    # Verificamos si el usuario existe, buscandolo por el correo
    if not newUser:
        raise APIException("Usuario o Password no encontrado", status_code=401)
    # Se valida si la clave que se recibio en la peticion es valida
    clave_valida=bcrypt.check_password_hash(newUser.password, password)
    if not clave_valida:
        raise APIException("Clave invalida", status_code=401)
    # Se genera un token y se retorna como respuesta
    token=create_access_token(email)
    refreshToken=create_refresh_token(email)
    return jsonify({"token":token, "refreshToken":refreshToken}), 200

# Validar: endpoint que reciba un token y retorna si este es valido o no

@api.route('/verify-token',methods=['POST'])
@jwt_required()
def verifyToken():    
    userEmail=get_jwt_identity()
    if not userEmail:
        return "Token invalido", 401
    return "Token correcto", 200

@api.route('/logout', methods=['POST'])
@jwt_required()
def destroyToken():
    jti = get_jwt()["jti"]
    now = datetime.now(timezone.utc)
    db.session.add(TokenBlockedList(token=jti, created_at=now, email=get_jwt_identity()))
    db.session.commit()
    return jsonify(msg="Access token revoked")

