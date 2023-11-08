from api import app, db
from flask import Flask, jsonify, request

@app.route('/')
@app.route('/divy/<int:id>', methods=['GET','POST'])
def getdivy(id):
    if request.method == 'POST':
        data = request.get_json()
        divyId = db.divys.count_documents({})
        name = data.get('name')
        description =data.get('description')
        participants = data.get('participants',[])
        
        participants.append(id)
        total = 0
        expenses = []
        
        new_divy = {
            'id': divyId,
            'name': name,
            'description': description,
            'participants': participants,
            'expenses': expenses,
            'total': total
        }
        result = db.divys.insert_one(new_divy)

        if result.acknowledged:
            return jsonify({'message': 'Divy created successfully'})
        else:
            return jsonify({'message': 'Failed to create Divy'}, 500)
    if request.method == 'GET':
            user_divys = list(db.divys.find({'participants': id}, projection=['id', 'name', 'description']))
            my_divys = [{'id': divy['id'], 'name': divy['name'], 'description': divy['description']} for divy in user_divys]

            return jsonify(my_divys)


@app.route('/profile', methods=['GET', 'POST'])
def myprofile():
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')


        if username and password:
            user = db.profiles.find_one({'username':username})

            if user:
                if user['password'] == password:

                    return jsonify({"userId": user['id']}), 200
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
@app.route('/profile/<int:id>',methods = ['GET'])
def getprofile(id):
    try:
        profile = db.profiles.find_one({"id": id})
        if profile:
            profile['_id'] = str(profile['_id'])
            # Serialize the profile to JSON and return it
            return jsonify(profile)
        else:
            return jsonify({"error": "Profile not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500