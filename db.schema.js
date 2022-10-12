const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');
const {Schema} = mongoose

const userSchema = new Schema({
    "Name":String,
    "count":Number,
    "id":ObjectId,
    "logs":[
      {
          "description": String,
          "duration": Number,
          "date": String,
      }
         ]    
   }) 

const User = mongoose.model('User',userSchema)

exports.User=User
exports.userSchema = userSchema