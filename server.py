from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import os
import json

app = Flask(__name__, static_folder='static')
CORS(app)

scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_dict(
    json.loads(os.getenv('GOOGLE_CREDENTIALS')), scope
)
client = gspread.authorize(creds)

sheet = client.open('ZZZ_CUP_Registration').sheet1

@app.route('/')
def serve_html():
    return send_from_directory('.', 'index.html')

@app.route('/save', methods=['POST'])
def save_to_google_sheets():
    data = request.json

    row = [
        data.get('nickname', ''),
        ', '.join([f"{data.get(f'c{i}', '')} ({data.get(f'a{i}', '')})" for i in range(1, 4)]),
        ', '.join([f"{data.get(f'c{i}', '')} ({data.get(f'a{i}', '')})" for i in range(4, 7)])
    ]

    sheet.append_row(row)

    return jsonify({'message': 'Данные успешно сохранены в Google Sheets'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import gspread
from oauth2client.service_account import ServiceAccountCredentials

app = Flask(__name__, static_folder='static')

CORS(app, resources={r"/*": {"origins": "*"}})

scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
creds = ServiceAccountCredentials.from_json_keyfile_name(
    'E:/proJectS/ZZZ_CUP/fifth-name-442316-e9-5a93d5da2863.json', scope)

client = gspread.authorize(creds)

sheet = client.open('ZZZ_CUP_Registration').sheet1

@app.route('/')
def serve_html():
    return send_from_directory('.', 'index.html')

@app.route('/save', methods=['POST'])
def save_to_google_sheets():
    data = request.json

    row = [
        data.get('nickname', ''),
        ', '.join([f"{data.get(f'c{i}', '')} ({data.get(f'a{i}', '')})" for i in range(1, 4)]),
        ', '.join([f"{data.get(f'c{i}', '')} ({data.get(f'a{i}', '')})" for i in range(4, 7)]),
    ]

    sheet.append_row(row)

    return jsonify({'message': 'Данные успешно сохранены в Google Sheets'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)