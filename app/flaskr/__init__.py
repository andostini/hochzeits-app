import os
from flask import Flask, render_template
from . import db


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        app.config.from_pyfile('config.py', silent=True)
    else:
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # register database functions
    db.init_app(app)

    # initialize database schema if file does not exist
    if not os.path.exists(app.config['DATABASE']):
        with app.app_context():
            db.init_db()

    # simple index route
    @app.route('/')
    def index():
        return render_template('index.html')

    from .blueprints import api
    app.register_blueprint(api.bp)

    return app





