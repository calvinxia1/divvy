from flask import Flask
from flask_pymongo import PyMongo 
from pymongo.mongo_client import MongoClient

app = Flask(__name__)
uri = "mongodb+srv://calvinxia1:testingpassword@cluster0.il9n2dl.mongodb.net/?retryWrites=true&w=majority"
app.config['MONGO_URI'] = "mongodb+srv://calvinxia1:testingpassword@cluster0.il9n2dl.mongodb.net/test?retryWrites=true&w=majority"
client = PyMongo(app)
db = client.db

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

from api import routes