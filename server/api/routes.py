from api import app, db
from flask import Flask, jsonify, request

@app.route('/')
@app.route('/profile', methods=['GET', 'POST'])
def myprofile():
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        password = data.form.get('password')


        if username and password:
            user = db.profiles.find_one({'username':username})

            if user:
                if user['password'] == password:
                    user.pop('_id', None)
                    return jsonify(user)
                else:
                    return jsonify({'message': 'Incorrect password'}), 401
            else:
                return jsonify({'message': 'User not found'}), 404
        return jsonify({'message': 'Invalid request'}), 400
    

    if request.method == 'GET':
        profile = db.profiles.find_one({"name": "Alvin"})
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
            profile['_id'] = str(profile['_id'])
            return jsonify(profile)
        else:
            return jsonify({"error": "Profile not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500