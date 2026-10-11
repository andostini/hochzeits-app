CREATE TABLE IF NOT EXISTS guests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    anrede TEXT NOT NULL,
    einleitung TEXT NOT NULL, 
    Gruppe TEXT,
    email TEXT NOT NULL,
    hotel INT,
    show_xx BOOLEAN,
    attending_xx BOOLEAN,
    attending_20_1 BOOLEAN,
    attending_20_2 BOOLEAN,
    attending_21 BOOLEAN,
    attending_22 BOOLEAN,
    ask_plus_one BOOLEAN,
    plus_one BOOLEAN,
    allergies TEXT,
    umfrage TEXT,
    url_shortcode TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS hotels (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    image TEXT,
    address TEXT NOT NULL,
    phone TEXT,
    web TEXT,
    googleMaps TEXT,
    lat REAL,
    lng REAL
);

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Jasmina', 'liebe Mama', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Familie', '' , NULL, True, False, False, False, False, False, False, False, Null, 'jasmina');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Sabine', 'liebe Sabine', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Familie', '' , NULL, True, False, False, False, False, False, False, False, Null, 'jasmina');


INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Manuel', 'lieber Papa', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-mettmann');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Oma Renate', 'liebe Oma', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-mettmann');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Stefi', 'liebe Steffi', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-mettmann');
INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Lennie', 'lieber Lenni', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-mettmann');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Kim', 'liebe Kim', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'kim');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Phil', 'lieber Phil', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'kim');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Teta', 'liebe Teta', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'teta');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Sasa', 'lieber Sasa', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'berlin');


INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Christoph', 'lieber Papa', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-bochum');
INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Tanja', 'liebe Tanja', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-bochum');
INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Lars', 'lieber Lars', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'lars');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Martina', 'liebe Mama', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-frankreich');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Denis', 'lieber Denis', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-frankreich');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Sebastian', 'lieber Sebastian', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-wien');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Simone', 'lieber Anemone', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-wien');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Kathrin', 'liebe Kathrin', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-dresden');
INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Benni', 'lieber Benni', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-dresden');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Leopold', 'lieber Leopold', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-dresden');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Pauline', 'liebe Pauline', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Familie', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-dresden');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Jürgen', 'lieber Jürgen', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Canis Resort', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-charlie');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Sabine', 'liebe Bine', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Canis Resort', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-charlie');


INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Ulrike', 'liebe Ulli', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Canis Resort', '', NULL, True, False, False, False, False, False, False, False, Null, 'ulli');


INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Laura', 'liebe Laura', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Canis Resort', '', NULL, True, False, False, False, False, False, False, False, Null, 'laura');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Marc', 'lieber Marc', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Canis Resort', '', NULL, True, False, False, False, False, False, False, False, Null, 'laura');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Hannah', 'liebe Hannah', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Canis Resort', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-kranzberg');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Patrick', 'lieber Patrick', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Canis Resort', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-kranzberg');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Renate', 'liebe Renate', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Film', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-ftr');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Farina', 'liebe Farina', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Film', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-ftr');
INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Florian', 'lieber Florian', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Film', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-ftr');
INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Leonie', 'liebe Leonie', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Film', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-ftr');
INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Julian', 'liebe Kathrin', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Film', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-ftr');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Torben', 'lieber Torben', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Film', '', NULL, True, False, False, False, False, False, False, False, Null, 'torben');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Vincent', 'lieber Vincent', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Film', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-dit');
INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Daniel', 'lieber Daniel', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Uni', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-oberding');


INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Niclas', 'lieber Niclas', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Uni', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-jagstzell');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Anto', 'lieber Anto', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Uni', '', NULL, True, False, False, False, False, False, False, False, Null, 'anto');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Vicky', 'liebe Vicky', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Uni', '', NULL, True, False, False, False, False, False, False, False, Null, 'vicky');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Sarah Geigenspieler', 'liebe Sarah', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Uni', '', NULL, True, False, False, False, False, False, False, False, Null, 'geigenspieler');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Miezi', 'liebe Miezi', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Freunde', '', NULL, True, False, False, False, False, False, False, False, Null, 'miezi');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Cora', 'liebe Cora', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Freunde', '', NULL, True, False, False, False, False, False, False, False, Null, 'cora');
INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Björn', 'lieber Björn', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Freunde', '', NULL, True, False, False, False, False, False, False, False, Null, 'cora');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Anna', 'liebe Anna', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Paminas Freunde', '', NULL, True, False, False, False, False, False, False, False, Null, 'anna');


INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Lorenz', 'lieber Lorenz', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Freunde', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-nbg');


INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Joseph', 'lieber Joseph', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Freunde', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-lebanon');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Sam', 'lieber Sam', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Fabians Freunde', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-sri-lanka');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Johanna', 'liebe Johanna', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Gemeinsame Freunde', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-geretsried');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Ben', 'lieber Ben', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Gemeinsame Freunde', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-geretsried');
INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Antonia', 'liebe Toni', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Gemeinsame Freunde', '', NULL, True, False, False, False, False, False, False, False, Null, 'toni');

INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Daniele', 'lieber Daniele', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Gemeinsame Freunde', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-italy');
INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Franzi', 'liebe Franzi', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Gemeinsame Freunde', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-italy');
INSERT INTO guests (name, anrede, einleitung, Gruppe, email, hotel, show_xx, attending_xx, attending_20_1, attending_20_2, attending_21, attending_22, ask_plus_one, plus_one, umfrage,url_shortcode) 
VALUES ('Lotti', 'liebe Lotti', 'Wir freuen uns, euch zu unserer Hochzeit einzuladen!', 'Gemeinsame Freunde', '', NULL, True, False, False, False, False, False, False, False, Null, 'team-italy');




















INSERT INTO hotels (name, image, address, phone, web, googleMaps, lat, lng) VALUES ('Seehotel Schlierseer Hof', 'http://www.schlierseerhof.de/site/assets/files/1132/hotel_schliersee_roli_loipold-123.640x800.webp', 'Seestraße 21, 83727 Schliersee', '08026 929200', 'http://www.schlierseerhof.de/', 'https://maps.app.goo.gl/wq8TD9kHZExFgAfM6', 47.7318512959715, 11.868049139545429);
INSERT INTO hotels (name, image, address, phone, web, googleMaps, lat, lng) VALUES ('Terofal Boutique Hotel', 'https://www.terofal-schliersee.de/media/yootheme/cache/d1/Terofal-Schliersee-mit-Bauerntheater-d1fa916c.webp', 'Xaver-Terofal-Platz 2, 83727 Schliersee', '08026 929210', 'https://www.terofal-schliersee.de/de', 'https://maps.app.goo.gl/RFPEP5Zz9TTJ7yvj8', 47.733369439882516, 11.866228626052763);
INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Das Maximilian',
 'https://d3enm7zx52tp93.cloudfront.net/verticals/hero/61ed2737f5c6427cbd643b39042263f6.jpg',
 'Maximilianstraße 1, 83727 Schliersee',
 '08026 9264100',
 'https://das-maximilian.com/',
 'https://maps.app.goo.gl/k6RBnD1BWCSEughN9',
47.729645869907785, 11.869696817126707);

 INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Schliersberg Alm',
 'https://magazin.schliersee.de/wp-content/uploads/2021/12/DSC08433.jpg',
 'Schliersberg 1, 83727 Schliersee',
 '08026 6722',
 'https://schliersbergalm.com/',
 'https://www.google.com/maps/search/?api=1&query=Schliersberg+Alm%2C+Schliersee',
 47.74114,
 11.87402);

INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Haus Panorama',
 'https://www.hauspanorama-schliersee.de/templates/yootheme/cache/haus-panorama-01-f47bd816.jpeg',
 'Perfallstraße 1B, 83727 Schliersee',
 '08026 920570',
 'https://www.hauspanorama-schliersee.de/',
 'https://www.google.com/maps/search/?api=1&query=Haus+Panorama%2C+Perfallstraße+1B%2C+83727+Schliersee',
 47.73464,
 11.86240);

INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Gästehaus am Kurpark',
 'https://www.tegernsee-schliersee.de/images/i5%21kwvcpq1s-/haus.jpeg',
 'Gartenstraße 15, 83727 Schliersee',
 '08026 94030',
 'https://gaestehaus-schliersee.de/',
 'https://www.google.com/maps/search/?api=1&query=Gästehaus+am+Kurpark%2C+Gartenstraße+15%2C+83727+Schliersee',
 47.73531,
 11.85727);

INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Gästehaus Huber am See',
 'https://www.tegernsee-schliersee.de/images/9xymns7tslm-/ansicht-von-der-seeseite.jpeg',
 'Seestraße 10, 83727 Schliersee',
 '08026 6619',
 'https://www.gaestehaus-huberamsee.de/',
 'https://www.google.com/maps/search/?api=1&query=Gästehaus+Huber+am+See%2C+Seestraße+10%2C+83727+Schliersee',
 47.73250,
 11.866389);

INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Gästehaus Edeltraud am See',
 'https://image.jimcdn.com/app/cms/image/transf/dimension%3D1920x400%3Aformat%3Djpg/path/sc48588fad09a57e8/image/ie01b058d83cc6457/version/1509100449/image.jpg',
 'Kurweg 9, 83727 Schliersee',
 '08026 92340',
 'https://www.gaestehaus-edeltraud.com/',
 'https://www.google.com/maps/search/?api=1&query=Gästehaus+Edeltraud+am+See%2C+Kurweg+9%2C+83727+Schliersee',
 47.73366,
 11.85673);

INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Gästehaus Schmetterer am See',
 'https://d1pgrp37iul3tg.cloudfront.net/objekt_pics/obj_full_28535_001.jpg',
 'Seestraße 9c, 83727 Schliersee',
 '08026 2231',
 'https://www.schmetterer-am-see.de/',
 'https://www.google.com/maps/search/?api=1&query=Gästehaus+Schmetterer+am+See%2C+Seestraße+9c%2C+83727+Schliersee',
 47.731667,
 11.866667);

INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Gästehaus am Strandbad',
 'https://image.jimcdn.com/app/cms/image/transf/dimension%3D325x10000%3Aformat%3Djpg/path/sc03afb69b5c9395e/image/ie118b83a7d9f37dc/version/1505848824/image.jpg',
 'Seestraße 30b, 83727 Schliersee',
 '08026 94539',
 'https://www.gaestehaus-am-strandbad.de/',
 'https://www.google.com/maps/search/?api=1&query=Gästehaus+am+Strandbad%2C+Seestraße+30b%2C+83727+Schliersee',
 47.72700,
 11.86800);

INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Gästehaus Risseck',
 'https://d1pgrp37iul3tg.cloudfront.net/objekt_pics/obj_full_28784_007.jpg',
 'Rißeckstraße 4, 83727 Schliersee',
 '08026 6140',
 'https://www.risseck.de/',
 'https://www.google.com/maps/search/?api=1&query=Gästehaus+Risseck%2C+Rißeckstraße+4%2C+83727+Schliersee',
 47.73785,
 11.86139);

INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Weindl am See',
 NULL,
 'Seestraße 24a, 83727 Schliersee',
 '08026 3874006',
 'https://www.weindlamsee.de/',
 'https://www.google.com/maps/search/?api=1&query=Weindl+am+See%2C+Seestraße+24a%2C+83727+Schliersee',
 47.73024,
 11.86911);

INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Haus Seegarten',
 'https://d1pgrp37iul3tg.cloudfront.net/objekt_pics/obj_full_28783_015.jpg',
 'Fischhauser Straße 4b, 83727 Schliersee',
 '08026 920587',
 'https://www.haus-seegarten.de/',
 'https://www.google.com/maps/search/?api=1&query=Haus+Seegarten%2C+Fischhauser+Straße+4b%2C+83727+Schliersee',
 47.710556,
 11.866111);

INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Haus Sonnbichl',
 'https://www.tegernsee-schliersee.de/images/qocxd7vhahe-/aussen.jpeg',
 'Carl-Schwarz-Straße 7, 83727 Schliersee',
 '08026 94648',
 'https://www.haus-sonnbichl.com/',
 'https://www.google.com/maps/search/?api=1&query=Haus+Sonnbichl%2C+Carl-Schwarz-Straße+7%2C+83727+Schliersee',
 47.72964,
 11.86956);

INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Ferienwohnungen Johanneshof',
 NULL,
 'Carl-Schwarz-Straße 3, 83727 Schliersee',
 '0170 5807881',
 'https://www.ferienwohnungen-johanneshof.de/',
 'https://www.google.com/maps/search/?api=1&query=Ferienwohnungen+Johanneshof%2C+Carl-Schwarz-Straße+3%2C+83727+Schliersee',
 47.72940,
 11.86940);

INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Alperie Ferienhaus',
 'https://diealperie.com/wp-content/uploads/web_alperie_0521-8821-576x768.jpg',
 'Dürnbachstraße 4, 83727 Schliersee-Neuhaus',
 '08026 7809951',
 'https://diealperie.com/',
 'https://www.google.com/maps/search/?api=1&query=Alperie+Ferienhaus%2C+Dürnbachstraße+4%2C+83727+Schliersee',
 47.70263,
 11.87413);

INSERT INTO hotels
(name, image, address, phone, web, googleMaps, lat, lng)
VALUES
('Kaiser''s Landhaus',
 NULL,
 'Dürnbachstraße 42, 83727 Schliersee-Neuhaus',
 '0177 2991722',
 'https://kaiserslandhaus.de/',
 'https://www.google.com/maps/search/?api=1&query=Kaisers+Landhaus%2C+Dürnbachstraße+42%2C+83727+Schliersee',
 47.70197,
 11.87042);