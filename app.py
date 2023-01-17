from flask import Flask, jsonify, render_template
import numpy as np
from bson import json_util, ObjectId
import json
import pandas as pd

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo

# Create an instance of our Flask app.
app = Flask(__name__)

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.heart_db

# Drops collection if available to remove duplicates
# db.heartData.drop()

# Set route


@app.route("/")
def home():
    return render_template("/index.html")

@app.route("/home")
def backhome():
    return render_template("/index.html")

@app.route("/conditions")
def conditions():
    return render_template("/conditions.html")

@app.route("/gender")
def gender():
    return render_template("/gender.html")


@app.route("/apiMongo")
def get_data():
    # Store the entire heartData in a list
    heartData = list(db.heartData.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)

    return jsonify(finalData)


@app.route("/api/mvf")
def mvf():
    heartData = list(db.mvf.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)

    return jsonify(finalData)


@app.route("/api/comorb")
def comorb():
    heartData = list(db.comorb_rate.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)    

    return jsonify(finalData)

@app.route("/api/lifestyle")
def lifestyle():
    heartData = list(db.lifestyle_rate.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)    

    return jsonify(finalData)

# NEW ROUTE FOR GENERAL HEART DISEASE FROM VICTOR
@app.route("/api/hddict")
def hddict():
    heartData = list(db.hd_dict.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)    

    return jsonify(finalData)

@app.route("/api/age_dict")
def age_dict():
    heartData = list(db.age_dict.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)    

    return jsonify(finalData)

# NEW ROUTES FOR CONDITIONS
@app.route("/api/d_dict")
def d_dict():
    heartData = list(db.d_dict.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)    

    return jsonify(finalData)

@app.route("/api/nd_dict")
def nd_dict():
    heartData = list(db.d_dict.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)    

    return jsonify(finalData)

@app.route("/api/sc_dict")
def sc_dict():
    heartData = list(db.d_dict.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)    

    return jsonify(finalData)                  

@app.route("/api/nc_dict")
def nc_dict():
    heartData = list(db.d_dict.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)    

    return jsonify(finalData)

@app.route("/api/a_dict")
def a_dict():
    heartData = list(db.d_dict.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)    

    return jsonify(finalData) 

@app.route("/api/na_dict")
def na_dict():
    heartData = list(db.d_dict.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)    

    return jsonify(finalData)

@app.route("/api/kd_dict")
def kd_dict():
    heartData = list(db.d_dict.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)    

    return jsonify(finalData) 

@app.route("/api/nkd_dict")
def nkd_dict():
    heartData = list(db.d_dict.find())
    finalData = []
    for data in heartData:
        del data['_id']
        finalData.append(data)    

    return jsonify(finalData)               

if __name__ == "__main__":
    app.run(debug=True)
