import os
from flask import Flask, render_template, abort, request
from . import db
import qrcode
from io import BytesIO
from flask import send_file


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

    @app.errorhandler(404)
    def page_not_found(error):
        return render_template('index.html', url_shortcode=None, page_not_found=True), 404

    # simple index route
    @app.route('/')
    def index():
        return render_template('index.html', url_shortcode=None)

    # simple index route
    @app.route('/<url_shortcode>/')
    def index2(url_shortcode):
        guests = db.get_db().execute('SELECT id FROM guests WHERE url_shortcode = ? LIMIT 1', (url_shortcode,)).fetchall()
        if not guests:
            abort(404)

        return render_template('index.html', url_shortcode=url_shortcode)
    
    
    @app.route('/<url_shortcode>/qr', methods=['GET'])
    def get_guest_qr(url_shortcode):
        db_conn = db.get_db()
        guest = db_conn.execute('SELECT * FROM guests WHERE url_shortcode = ? LIMIT 1', (url_shortcode,)).fetchone()
        if not guest:
            abort(404)
        else:
            qr = qrcode.QRCode(
                version=1,
                error_correction=qrcode.constants.ERROR_CORRECT_L,
                box_size=10,
                border=4,
            )
            qr.add_data(f'{request.scheme}://{request.host}/{url_shortcode}')
            qr.make(fit=True)
            img = qr.make_image(fill_color="black", back_color="white")
            buf = BytesIO()
            img.save(buf)
            buf.seek(0)
            return send_file(buf, mimetype='image/png')
    

    @app.route('/admin')
    def admin():
        return render_template('index.html', url_shortcode=None)

    from .blueprints import api
    app.register_blueprint(api.bp)

    return app





