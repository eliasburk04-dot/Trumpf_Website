#!/usr/bin/env python3
"""
Local development server for "Trump Website" with working contact form.
- Serves all static files from the project root
- Implements POST /contact_handler.php compatible endpoint
- Sends real emails via SMTP if environment variables are set
- Falls back to writing .eml files into ./outbox if SMTP not configured

Environment variables for real email (set before starting):
  SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_TO_NAME (optional)

Start:
  python server.py --port 8081 --host 0.0.0.0
"""
from __future__ import annotations
import os
import re
import time
import argparse
from pathlib import Path
from flask import Flask, request, send_from_directory, jsonify, redirect
from typing import Optional
from email.message import EmailMessage
import smtplib

ROOT = Path(__file__).resolve().parent
OUTBOX = ROOT / 'outbox'

# Load .env if present (simple parser, no extra dependency)
def _load_dotenv(env_path: Path) -> None:
    if not env_path.exists():
        return
    try:
        for line in env_path.read_text(encoding='utf-8').splitlines():
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            if '=' not in line:
                continue
            key, val = line.split('=', 1)
            key = key.strip()
            val = val.strip().strip('"').strip("'")
            if key and key not in os.environ:
                os.environ[key] = val
    except Exception:
        # Fail silently; environment variables can still be provided by OS
        pass

_load_dotenv(ROOT / '.env')

app = Flask(__name__, static_folder=None)

# Helpers
EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]{2,}$")

def sanitize(s: Optional[str]) -> str:
    return (s or '').strip()


def valid_email(s: Optional[str]) -> bool:
    return bool(EMAIL_RE.match(s or ''))


def wants_json() -> bool:
    accept = request.headers.get('Accept', '')
    ct = request.headers.get('Content-Type', '')
    xhr = request.headers.get('X-Requested-With', '')
    return ('application/json' in accept) or ('application/json' in ct) or (xhr.lower() == 'xmlhttprequest')


def send_email_via_smtp(subject: str, html: str, to_addr: str, to_name: str, reply_to: str, sender_name: str) -> tuple[bool, str]:
    host = os.getenv('SMTP_HOST')
    port = int(os.getenv('SMTP_PORT', '587'))
    user = os.getenv('SMTP_USER')
    password = os.getenv('SMTP_PASS')
    if not host or not user or not password:
        return False, 'SMTP not configured'

    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = f"{sender_name} <{user}>" if sender_name else user
    msg['To'] = f"{to_name} <{to_addr}>" if to_name else to_addr
    if reply_to:
        msg['Reply-To'] = reply_to
    msg.set_content('Diese E-Mail enthält HTML-Inhalt.')
    msg.add_alternative(html, subtype='html')

    try:
        with smtplib.SMTP(host, port, timeout=15) as s:
            s.starttls()
            s.login(user, password)
            s.send_message(msg)
        return True, 'smtp'
    except Exception as e:
        return False, f'SMTP error: {e}'


@app.after_request
def add_cors_headers(resp):
    resp.headers['Access-Control-Allow-Origin'] = '*'
    resp.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
    resp.headers['Access-Control-Allow-Headers'] = 'Content-Type, X-Requested-With, Accept'
    return resp


@app.route('/contact_handler.php', methods=['POST', 'OPTIONS'])
def contact_handler():
    if request.method == 'OPTIONS':
        return ('', 200)

    form = request.form if request.form else (request.get_json(silent=True) or {})

    # Honeypot
    if form.get('website'):
        return _error('Spam erkannt', status=400)

    name = sanitize(form.get('name'))
    company = sanitize(form.get('company'))
    email = sanitize(form.get('email'))
    phone = sanitize(form.get('phone'))
    subject = sanitize(form.get('subject') or 'Kontakt & Beratung')
    message = sanitize(form.get('message'))

    # Basic validations (mirror client)
    if len(name) < 2 or len(name) > 100:
        return _error('Name hat eine ungültige Länge', 400)
    if not valid_email(email):
        return _error('Ungültige E-Mail-Adresse', 400)
    if phone and len(phone) > 30:
        return _error('Telefon ist zu lang', 400)
    if len(message) < 10 or len(message) > 5000:
        return _error('Nachricht hat eine ungültige Länge', 400)

    ip = request.headers.get('X-Forwarded-For', request.remote_addr or 'unknown')
    ua = request.headers.get('User-Agent', 'unknown')
    ts = time.strftime('%d.%m.%Y %H:%M:%S')

    # Build HTML body (simple)
    html = f"""
    <h2>Neue Kundenanfrage</h2>
    <p><strong>Name:</strong> {name}<br>
       <strong>Unternehmen:</strong> {company or 'Nicht angegeben'}<br>
       <strong>E-Mail:</strong> {email}<br>
       <strong>Telefon:</strong> {phone or 'Nicht angegeben'}<br>
       <strong>Betreff:</strong> {subject}</p>
    <p><strong>Nachricht:</strong><br>{message.replace('\n', '<br>')}</p>
    <hr>
    <p><strong>IP:</strong> {ip}<br>
       <strong>User-Agent:</strong> {ua}<br>
       <strong>Zeitstempel:</strong> {ts}</p>
    """

    to_addr = os.getenv('MAIL_TO', 'eliasburk04@gmail.com')
    to_name = os.getenv('MAIL_TO_NAME', 'Thomas Burk GmbH')

    ok, method = send_email_via_smtp(f"[Website Anfrage] {subject} - {name}", html, to_addr, to_name, reply_to=email, sender_name=name)
    if not ok:
        # Fallback: write .eml into outbox
        OUTBOX.mkdir(exist_ok=True)
        eml_name = OUTBOX / f"mail_{time.strftime('%Y%m%d_%H%M%S')}.eml"
        with open(eml_name, 'w', encoding='utf-8') as f:
            f.write(f"To: {to_name} <{to_addr}>\n")
            f.write(f"Subject: [Website Anfrage] {subject} - {name}\n")
            f.write(f"Reply-To: {email}\n")
            f.write("MIME-Version: 1.0\nContent-Type: text/html; charset=UTF-8\n\n")
            f.write(html)
        method = f"outbox:{eml_name.name}"

    if wants_json():
        return jsonify({ 'success': True, 'method': method, 'timestamp': time.strftime('%Y-%m-%dT%H:%M:%S') })
    # Fallback redirect behavior
    ref = request.headers.get('Referer', '')
    if ref:
        sep = '&' if ('?' in ref) else '?'
        return redirect(ref + sep + 'ok=1', code=303)
    return redirect('index.html?ok=1#kontakt', code=303)


def _error(msg: str, status: int = 400):
    if wants_json():
        return jsonify({ 'success': False, 'error': msg, 'timestamp': time.strftime('%Y-%m-%dT%H:%M:%S') }), status
    ref = request.headers.get('Referer', '')
    if ref:
        sep = '&' if ('?' in ref) else '?'
        return redirect(ref + sep + f"err={msg}", code=303)
    return redirect('index.html?err=' + msg + '#kontakt', code=303)


@app.route('/', defaults={'path': 'index.html'})
@app.route('/<path:path>')
def static_files(path: str):
    # Serve static files from project root
    full = ROOT / path
    if full.is_dir():
        # Default to index in directories
        return send_from_directory(str(full), 'index.html')
    directory = str(full.parent)
    filename = full.name
    return send_from_directory(directory, filename)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--host', default='0.0.0.0')
    parser.add_argument('--port', type=int, default=8081)
    args = parser.parse_args()
    print(f"Serving on http://{args.host}:{args.port} (CTRL+C to quit)")
    if os.name == 'nt':
        print("Tip: Add a Windows Firewall inbound rule if your phone can't connect.")
    app.run(host=args.host, port=args.port)
