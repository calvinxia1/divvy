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
@app.route('/profile/<username>',methods = ['GET'])
def getprofile(username):
    try:
        profile = db.profiles.find_one({"username": username})
        if profile:
            # Serialize the profile to JSON and return it
            return jsonify(profile)
        else:
            return jsonify({"error": "Profile not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500