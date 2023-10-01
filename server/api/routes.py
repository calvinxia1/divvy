from api import app, db
from flask import Flask, jsonify


@app.route('/profile', methods=['GET'])
def myprofile():
    profile = db.profiles.find_one({"age": 22})
    print(profile)
    
    if profile:
        # Convert the MongoDB document to a dictionary and return it as JSON
        profile['_id'] = str(profile['_id'])
        return jsonify(profile)
    else:
        # If no profile is found, return a 404 response
        return "Profile not found", 404
