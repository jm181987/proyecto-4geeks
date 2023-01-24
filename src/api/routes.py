"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from datetime import datetime, timezone, timedelta
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, TokenBlockedList, Imagen
from api.utils import generate_sitemap, APIException
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity,get_jwt
from flask_sqlalchemy import SQLAlchemy
from firebase_admin import storage
import tempfile

app = Flask(__name__)
api = Blueprint('api', __name__)
bcrypt = Bcrypt(app)


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
    token=create_access_token(identity=newUser.id)
    refreshToken=create_refresh_token(identity=newUser.id)
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

@api.route('/updatepassword', methods = ['PATCH'])
@jwt_required()
def patch_user_pass():
    new_password = request.json.get('password')
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    user.password = bcrypt.generate_password_hash(new_password).decode("utf-8")
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg": "Clave actualizada"}), 200

@api.route('/uploadphoto', methods = ['POST'])
@jwt_required()
def uploadphoto():
    user_id = get_jwt_identity()
    #Recibe un archivo en la peticion
    file = request.files['profilePic']
    #Extraemos la extension del archivo
    extension = file.filename.split(".")[1]
    #Guarda el archivo recibido en un archivo temporal
    temp = tempfile.NamedTemporaryFile(delete=False)
    file.save(temp.name)
    #Subir el archivo a firebase
    #Se llama al bucket
    bucket = storage.bucket(name="geeks-e71e0.appspot.com")
    #Se genera el nombre del archivo con el id y la extension
    filename = "profiles/" + str(user_id) + "." + extension
    ##Se hace referencia al espacio dentro del bucket
    resource = bucket.blob(filename)
    ##Se sube el archivo temporal al espacio designado en el bucket
    #Se debe de especificar el tipo de contenido en base a la extension
    resource.upload_from_filename(temp.name, content_type="image/" + extension)

    #Verificamos si el usuario existe
    user = User.query.get(user_id)
    if user is None:
        return "Usuario no encontrado", 403
    #Guardar la imagen en la base de datos si no existe previamente
    if Imagen.query.filter(Imagen.resource_path == filename).first() is None:
        new_image = Imagen(resource_path=filename, description="Profile photo user " + str(user_id))
        db.session.add(new_image)
        #Procesar las operaciones de la base de datos, pero sin cerrarla para poder ejecutar mas operaciones posteriormete
        db.session.flush()
        #si se encuentra el usuario se actualiza el espacio de la foto 
        user.profile_picture_id = new_image.id
        #como todo es correcto, ya se puede crear el registro en la base de datos
        db.session.add(user)
        db.session.commit()

        return "OK", 200

@api.route('/getphoto', methods = ['GET'])
@jwt_required()
def getphoto():
    user_id = get_jwt_identity()
    #Recibe un archivo en la peticion
    file = request.files['profilePic']
    #Extraemos la extension del archivo
    extension = file.filename.split(".")[1]
    #Guarda el archivo recibido en un archivo temporal
    temp = tempfile.NamedTemporaryFile(delete=False)
    file.save(temp.name)
    #Subir el archivo a firebase
    #Se llama al bucket
    bucket = storage.bucket(name="geeks-e71e0.appspot.com")
    #Se genera el nombre del archivo con el id y la extension
    filename = "profiles/" + str(user_id) + "." + extension
    ##Se hace referencia al espacio dentro del bucket
    resource = bucket.blob(filename)
    ##Se sube el archivo temporal al espacio designado en el bucket
    #Se debe de especificar el tipo de contenido en base a la extension
    resource.upload_from_filename(temp.name, content_type="image/" + extension)

    #Verificamos si el usuario existe
    user = User.query.get(user_id)
    if user is None:
        return "Usuario no encontrado", 403
    #Guardar la imagen en la base de datos si no existe previamente
    if Imagen.query.filter(Imagen.resource_path == filename).first() is None:
        new_image = Imagen(resource_path=filename, description="Profile photo user " + str(user_id))
        db.session.add(new_image)
        #Procesar las operaciones de la base de datos, pero sin cerrarla para poder ejecutar mas operaciones posteriormete
        db.session.flush()
        #si se encuentra el usuario se actualiza el espacio de la foto 
        user.profile_picture_id = new_image.id
        #como todo es correcto, ya se puede crear el registro en la base de datos
        db.session.add(user)
        db.session.commit()

        return "OK", 200  

@api.route('/helloprotected', methods=['GET'])
@jwt_required()
def handle_hello_protected():
    claims=get_jwt()
    user = User.query.get(get_jwt_identity())
    response_body = {
        "message": "token válido",
        "user_id": get_jwt_identity(),
        "role":claims["role"],
        "user_email": user.email
    }

    return jsonify(user.serialize()), 200


@api.route('/getphoto', methods=['GET'])
@jwt_required()
def getPhoto():
    #Buscamos el usuario en la BD partiendo del id del token
    user = User.query.get(get_jwt_identity())
    if user is None:
        return "Usuario no encontrado", 403
   
    # Subir el archivo a firebase
    ## Se llama al bucket
    bucket=storage.bucket(name="geeks-e71e0.appspot.com")
    ## Se hace referencia al espacio dentro del bucket
    blob = bucket.blob(user.profile_picture_id)
    ## Se sube el archivo temporal al espacio designado en el bucket
    url=blob.generate_signed_url(version="v4",
        # This URL is valid for 15 minutes
        expiration=timedelta(minutes=15),
        # Allow GET requests using this URL.
        method="GET")
        
    return jsonify({"pictureUrl":url}), 200