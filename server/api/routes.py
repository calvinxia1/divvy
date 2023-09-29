from api import app, db
from flask import Flask, jsonify

@app.route('/profile', methods=['GET'])
def myprofile():
    profile = db.profiles.find({"age": 22})
    return jsonify(profile)
