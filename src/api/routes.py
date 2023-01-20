"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, render_template
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/artist', methods=['POST'])
def create_artist():
    request_data = request.get_json()
    new_artist = {"name": request_data["name"], }
    return 

@api.route('/artist', methods=['GET'])
def show_artist():
    return 


@api.route('/artist/<string:name>')
def create_artist(name):
    pass

@api.route('/login')
def login():
    return render_template('')