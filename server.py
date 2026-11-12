from flask import Flask, jsonify, send_from_directory, url_for, request
import uuid
from flask_cors import CORS
from flask_socketio import SocketIO, emit

app = Flask(__name__, static_folder='static')
CORS(app)
socketio = SocketIO(app)

@app.route('/')
def index():
    return "Hello, WebSocket!"

@app.route('/create', methods=['GET'])
def create_draft():
    draft_id = str(uuid.uuid4())
    player1 = request.args.get('player1', 'Игрок 1')
    player2 = request.args.get('player2', 'Игрок 2')
    player1_link = f"{url_for('draft_page', draft_id=draft_id, role='player1', _external=True)}?nickname={player1}"
    player2_link = f"{url_for('draft_page', draft_id=draft_id, role='player2', _external=True)}?nickname={player2}"
    spectator_link = url_for('draft_page', draft_id=draft_id, role='spectator', _external=True)

    return jsonify({
        'player1_link': player1_link,
        'player2_link': player2_link,
        'spectator_link': spectator_link
    })

@app.route('/draft/<draft_id>/<role>', methods=['GET'])
def draft_page(draft_id, role):
    if role == 'player1':
        return send_from_directory('.', 'p1Draft.html')
    elif role == 'player2':
        return send_from_directory('.', 'p2Draft.html')
    elif role == 'spectator':
        return send_from_directory('.', 'spectator.html')
    else:
        return "Role not recognized", 400
    
connected_users = {}

@socketio.on('connect')
def handle_connect():
    print("User connected")

@socketio.on('player_ready')
def handle_player_ready(data):
    emit('player_ready', data, broadcast=True)


@socketio.on('player_action')
def handle_player_action(data):
    print(f"Получено сообщение от игрока: {data}")
    emit('update_action', data, broadcast=True)

if __name__ == '__main__':
    app.run(debug=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)