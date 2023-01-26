"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

import os
from datetime import datetime, timezone, timedelta
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, TokenBlockedList, Imagen, Posts, Fav_posts
from api.utils import generate_sitemap, APIException
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity,get_jwt
from flask_sqlalchemy import SQLAlchemy
from firebase_admin import storage
import tempfile
import json


app = Flask(__name__)
api = Blueprint('api', __name__)
bcrypt = Bcrypt(app)

cripto=Bcrypt(Flask(__name__))
   
# Traer todos los Usuarios
@api.route('/users', methods=['GET'])
def get_user():
    user=User.query.all()
    return list(map(lambda item: item.serialize(),user)), 200
   
# traer los favoritos
@api.route('/favorites', methods=['GET'])
@jwt_required()
def get_Fav_post():
    user_id=get_jwt_identity()
    fav_posts=Fav_posts.query.filter(Fav_posts.user_id==user_id).all()
    return list(map(lambda item: item.serialize(),fav_posts)), 200

#agregar un favorito
@api.route('/favorites/<int:fav_id>', methods=['POST'])
@jwt_required()
def add_favorite(fav_id):
    user_id=get_jwt_identity()
    post_exists=Posts.query.filter(Posts.id==fav_id).first()
    fav_exists=Fav_posts.query.filter(Fav_posts.post_id==fav_id, Fav_posts.user_id==user_id).first()
    if post_exists is None:
        return jsonify({"msg":"Post does not exist"}), 404

    if fav_exists != None:
        return jsonify({'msg':'Favorite already exists'}), 404
    

    new_fav_post=Fav_posts(user_id = user_id, post_id= fav_id)
    db.session.add(new_fav_post)
    db.session.commit()
    db.session.refresh(new_fav_post)
    return jsonify({'msg':'Favorite Added'}), 200

#quitar un favorito
@api.route('/favorites/<int:fav_id>', methods=['DELETE'])
@jwt_required()
def delete_favorite(fav_id):
    user_id=get_jwt_identity()
    fav_exists=Fav_posts.query.filter(Fav_posts.id==fav_id).first()
    if fav_exists is None:
        return jsonify({'msg':"Favorite does not exist"}), 404

    if fav_exists.user_id==user_id:
        fav_post=Fav_posts.query.filter_by(id=fav_id).delete()
        db.session.commit()
        return jsonify({'msg':"Favorite Deleted"}), 200
    
    return jsonify({"msg":"Not authorized to delete favorite"}), 403

#traer todos los post
@api.route('/posts', methods=['GET'])
def get_posts():
    posts=Posts.query.all()
    return list(map(lambda item: item.serializeCompact(),posts)), 200

#traer toda la info de solo una
@api.route('/posts/<int:post_param>', methods=['GET'])
def get_post_detail(post_param):
    post=Posts.query.filter(Posts.id==post_param).first()
    return jsonify(post.serializeFull()), 200

#agregar una nueva publicacion
@api.route('posts/new', methods = ['POST'])
@jwt_required()
def add_post():
    user_id=get_jwt_identity()
    body = json.loads(request.data)
    for i in body:
        if (type(body[i]) != bool):
            body[i] = body[i].strip()
            
    for i in body:
        if (body[i] == ""):
            return jsonify({"msg":"There are empty values"}), 404
    
    new_post = Posts(
        title=body["title"],
        make=body["make"],
        model=body["model"],
        style=body["style"],
        fuel=body["fuel"],
        transmission=body["transmission"],
        financing=body["financing"],
        doors=body["doors"],
        year=body["year"],
        price=body["price"],
        description=body["description"],
        user_id=user_id
    )
    db.session.add(new_post)
    db.session.commit()
    return jsonify({"msg":"New post uploaded"}), 200

#actualizar publicacion
@api.route('/posts/update/<int:post_param>', methods = ['PUT'])
@jwt_required()
def update_post(post_param):
    user_id=get_jwt_identity()
    body = json.loads(request.data)
    for i in body:
        if (type(body[i]) != bool):
            body[i] = body[i].strip()

    for i in body:
        if (body[i] == ""):
            return jsonify({"msg":"There are empty values"}), 404

    post_exists=Posts.query.filter(Posts.id==post_param).first()

    if post_exists != None:

        if post_exists.user_id != user_id:
            return jsonify({"msg":"Not authorized to edit post"})

        post = Posts.query.get(post_param)
        post.title= body["title"]
        post.make= body["make"]
        post.model= body["model"]
        post.style= body["style"]
        post.fuel= body["fuel"]
        post.transmission= body["transmission"]
        post.doors= body["doors"]
        post.year= body["year"]
        post.price= body["price"]
        post.description= body["description"]
        post.financing= request.json.get('financing')
        db.session.commit()
        return jsonify({'msg':'Post Updated'}), 200

    return jsonify({'msg':'Post does not exist'}), 404
    
#borrando publicacion
@api.route('/posts/delete/<int:post_param>', methods = ['DELETE'])
@jwt_required()
def delete_post(post_param):
    user_id=get_jwt_identity()
    post = Posts.query.filter(Posts.id==post_param).first()
    if post is None:
        return jsonify({'msg':'Post does not exist'}), 404

    if post.user_id != user_id:
        return jsonify({"msg":"Not authorized to delete post"}), 403

    db.session.delete(post)
    db.session.commit()
    return jsonify({'msg':'Post Deleted'}), 200

@api.route('/change_password', methods=['PATCH'])
@jwt_required()
def update_user_password():
    new_password=request.json.get("password")
    user_id=get_jwt_identity()
    user=User.query.get(user_id)
    user.password=cripto.generate_password_hash(new_password)
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg":"Password has been updated"}), 200
    
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
    userEmail = get_jwt_identity()
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
    pictureid = str(user.profile_picture_id)
    blob = bucket.blob(pictureid)
    ## Se sube el archivo temporal al espacio designado en el bucket
    url=blob.generate_signed_url(version="v4",
        # This URL is valid for 15 minutes
        expiration=timedelta(minutes=15),
        # Allow GET requests using this URL.
        method="GET")
        
    return jsonify({"pictureUrl":url}), 200
