from flask import Flask, Blueprint, request, current_app as app, abort, Response

from ..db import get_db

bp = Blueprint('api', __name__, url_prefix='/api')

@bp.route('/')
def api_index():
    return 'Hello API'

@bp.route('/getUser')
def get_user():
    #get User from DB and return username and email
    db = get_db()
    user = db.execute('SELECT username, email FROM users LIMIT 1').fetchone()
    if user is None:
        abort(404)
    return {'username': user['username'], 'email': user['email']}

