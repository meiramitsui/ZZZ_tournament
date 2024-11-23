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

    group1 = [
        f"{data.get(f'c{i}', '')} [{data.get(f'm{i}', '')}] ({data.get(f'a{i}', '')} [{data.get(f'u{i}', '')}])"
        for i in range(1, 4)
    ]
    
    group2 = [
        f"{data.get(f'c{i}', '')} [{data.get(f'm{i}', '')}] ({data.get(f'a{i}', '')} [{data.get(f'u{i}', '')}])"
        for i in range(4, 7)
    ]
    
    row = [
        data.get('nickname', ''),
        ', '.join(group1),
        ', '.join(group2)
    ]

    sheet.append_row(row)

    return jsonify({'message': 'Ваши данные сохранены, регистрация прошла успешно.'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
