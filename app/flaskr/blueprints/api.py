from collections import defaultdict
from io import BytesIO

from flask import Blueprint, abort, request, send_file
from PIL import Image, ImageDraw, ImageFont
import qrcode

from ..db import get_db

bp = Blueprint('api', __name__, url_prefix='/api')


def get_font(size, bold=False):
    font_name = 'DejaVuSans-Bold.ttf' if bold else 'DejaVuSans.ttf'
    font_path = f'/usr/share/fonts/truetype/dejavu/{font_name}'
    try:
        return ImageFont.truetype(font_path, size)
    except OSError:
        return ImageFont.truetype(font_name, size)


def draw_centered_text(draw, text, y, font, fill, center_x):
    left, _, right, bottom = draw.textbbox((0, 0), text, font=font)
    draw.text((center_x - (right - left) / 2, y), text, font=font, fill=fill)
    return y + bottom


def draw_centered_wrapped_text(draw, text, y, font, fill, center_x, max_width, spacing=10):
    words = text.split()
    line = ''
    for word in words:
        candidate = f'{line} {word}'.strip()
        if line and draw.textbbox((0, 0), candidate, font=font)[2] > max_width:
            y = draw_centered_text(draw, line, y, font, fill, center_x) + spacing
            line = word
        else:
            line = candidate
    return draw_centered_text(draw, line, y, font, fill, center_x)


def draw_invitation_flyer(page, box, greeting, url):
    left, top, right, bottom = box
    background = '#ffffff'
    pine = '#29473a'
    rose = '#b86d62'
    gold = '#b9a57a'
    padding = 80
    center_x = (left + right) / 2
    draw = ImageDraw.Draw(page)

    draw.rectangle(box, fill=background, outline=gold, width=5)
    y = top + 100
    y = draw_centered_text(draw, 'PAMINA & FABIAN', y, get_font(68, bold=True), pine, center_x) + 26
    y = draw_centered_text(draw, '21. August 2027', y, get_font(42), rose, center_x) + 60
    draw.line((left + padding, y, right - padding, y), fill=gold, width=3)
    y += 60
    y = draw_centered_wrapped_text(
        draw, greeting, y, get_font(52, bold=True), pine, center_x,
        right - left - 2 * padding
    ) + 65

    qr_size = 570
    qr_image = qrcode.make(url).convert('RGB').resize((qr_size, qr_size))
    qr_left = int(center_x - qr_size / 2)
    page.paste(qr_image, (qr_left, int(y)))
    y += qr_size + 55

    message = 'Über diesen QR-Code findet ihr alle wichtigen Informationen rund um unsere Hochzeit.'
    y = draw_centered_wrapped_text(
        draw, message, y, get_font(38), pine, center_x,
        right - left - 2 * padding
    ) + 30
    draw_centered_text(draw, url, y, get_font(34, bold=True), rose, center_x)

@bp.route('/')
def api_index():
    return 'Hello API'


@bp.route('/<url_shortcode>', methods=['GET'])
def get_guest(url_shortcode):
    #get Guest from DB and return name, einleitung, email and url_shortcode
    db = get_db()
    guests = db.execute('SELECT * FROM guests WHERE url_shortcode = ?', (url_shortcode,)).fetchall()
    if not guests:
        abort(404)
        
    print({'guests': [dict(guest) for guest in guests]})
    
    return {'guests': [dict(guest) for guest in guests]}

@bp.route('/guest/<int:guest_id>', methods=['GET', 'PATCH'])
def get_guest_by_id(guest_id):
    if request.method == 'GET':
        db = get_db()
        guest = db.execute('SELECT * FROM guests WHERE id = ?', (guest_id,)).fetchone()
        if not guest:
            abort(404)
        return {'guest': dict(guest)}
    elif request.method == 'PATCH':
        db = get_db()
        data = request.get_json()
        
        db.execute(f'UPDATE guests SET {data["field"]} = ? WHERE id = ?', (data['value'], guest_id))
        db.commit()
        return {'status': 'success'}

    
    
@bp.route('/guests', methods=['GET'])
def get_guests():
    db = get_db()
    guests = db.execute('SELECT * FROM guests').fetchall()
    return {'guests': [dict(guest) for guest in guests]}    


@bp.route('/hotels', methods=['GET'])
def get_hotels():
    db = get_db()
    hotels = db.execute('SELECT * FROM hotels').fetchall()
    return {'hotels': [dict(hotel) for hotel in hotels]}


@bp.route('/invitations', methods=['GET'])
def get_invitations():
    db = get_db()
    guests = db.execute(
        'SELECT anrede, url_shortcode FROM guests ORDER BY url_shortcode, id'
    ).fetchall()
    invitations = defaultdict(list)
    for guest in guests:
        invitations[guest['url_shortcode']].append(guest['anrede'])

    if not invitations:
        abort(404)

    page_size = (2480, 3508)
    pages = []
    invitation_items = list(invitations.items())
    for page_start in range(0, len(invitation_items), 4):
        page = Image.new('RGB', page_size, '#ffffff')
        for index, (shortcode, greetings) in enumerate(invitation_items[page_start:page_start + 4]):
            column = index % 2
            row = index // 2
            left = column * 1240 + 35
            top = row * 1754 + 35
            right = (column + 1) * 1240 - 35
            bottom = (row + 1) * 1754 - 35
            invitation_url = f'{request.url_root.rstrip("/")}/{shortcode}/'
            greeting = ', '.join(greetings)
            greeting = greeting[:1].upper() + greeting[1:]
            draw_invitation_flyer(page, (left, top, right, bottom), greeting, invitation_url)
        pages.append(page)

    pdf = BytesIO()
    pages[0].save(pdf, format='PDF', save_all=True, append_images=pages[1:], resolution=300)
    pdf.seek(0)
    return send_file(
        pdf,
        mimetype='application/pdf',
        as_attachment=True,
        download_name='hochzeitseinladungen.pdf',
    )