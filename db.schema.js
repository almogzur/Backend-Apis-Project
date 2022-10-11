
const mongoose = require('mongoose')
const { Schema } = mongoose;
const ObjectId = require('mongodb').ObjectID;

const userSchema = new Schema({
        "Name":String,
        "count":Number,
        "id":ObjectId,
        "logs":[{
              "description": String,
              "duration": Number,
              "date": String,
        }]
        
    })



    
exports.userSchema = userSchema