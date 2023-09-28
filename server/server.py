from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/profile', methods=['GET'])
def myprofile():
    data = {
        "name": "Calvin",
        "about": "I'm trying to learn the full stack process so bear with me :D"
    }
    return jsonify(data)
if __name__ == '__main__':
    app.run(debug=True)