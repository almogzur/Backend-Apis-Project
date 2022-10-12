const mongoose = require('mongoose')
const { Schema } = mongoose;
const ObjectId = require('mongodb').ObjectId;

const userSchema = new mongoose.Schema({
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
//console.log(module.exports,"exports from  db.schema")
