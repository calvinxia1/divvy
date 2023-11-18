from api import app, db
from flask import Flask, jsonify, request
@app.route('/<uid>/friendrequests', methods = ['GET','POST'])
def friendrequestinfo(uid):
    uid = int(uid)
    if request.method == 'POST':
        data = request.get_json()
        recipient = data.get('recipient')
        new_friend_request = {
            'sender': uid,
            'recipient': recipient
        }
        result = db.friendrequest.insert_one(new_friend_request)
        if result.acknowledged:
            return jsonify({'message': 'Friend Request created successfully'})
        else:
            return jsonify({'message': 'Failed to create Friend Request'}, 500)
    if request.method == 'GET':
        friend_request = list(db.friendrequest.find())

        return jsonify(friend_request)
    
@app.route('/divys/<divyId>', methods=['GET'])
def divyinfo(divyId):
    divyId = int(divyId)
    if request.method == 'GET':
            divy = db.divys.find_one({'did': divyId}, projection=['name','description', 'participants','expenses', 'total'])
            if divy:
                divy_info = {
                    'name': divy['name'],
                    'description': divy['description'],
                    'participants': divy['participants'],
                    'expenses': divy['expenses'],
                    'total': divy['total']
                }
                return jsonify(divy_info)
            
            else:
                return jsonify({'error': 'Divy not found'}), 404


@app.route('/<uid>/divys', methods=['GET','POST'])
def divy(uid):
    uid = int(uid)
    if request.method == 'POST':
        data = request.get_json()
        divyId = db.divys.count_documents({})
        name = data.get('name')
        description =data.get('description')
        participants = data.get('participants',[])
        
        participants.append(uid)
        total = 0
        expenses = []
        
        new_divy = {
            'did': divyId,
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
            user_divys = list(db.divys.find({'participants': uid}, projection=['did']))
            my_divys = [divy['did'] for divy in user_divys]

            return jsonify(my_divys)
@app.route('/<uid>/friends', methods=['GET'])
def friend(uid):
    uid = int(uid)
    if request.method == 'GET':
            curr_user = db.profiles.find({'uid': uid})
            my_friends = list(curr_user['friends'])

            return jsonify(my_friends)


@app.route('/login', methods=['POST'])
def myprofile():
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')


        if username and password:
            user = db.profiles.find_one({'username':username})

            if user:
                if user['password'] == password:
                    return jsonify({"userId": user['uid']}), 200
                else:
                    return jsonify({'message': 'Incorrect password'}), 401
            else:
                return jsonify({'message': 'User not found'}), 404
        return jsonify({'message': 'Invalid request'}), 400
    
@app.route('/<id>/profile',methods = ['GET'])
def getprofile(id):
    id = int(id)
    try:
        profile = db.profiles.find_one({"uid": id})
        if profile:
            profile['_id'] = str(profile['_id'])
            # Serialize the profile to JSON and return it
            return jsonify(profile)
        else:
            return jsonify({"error": "Profile not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500