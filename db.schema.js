require('dotenv').config();
const mongoose = require('mongoose');
const {Schema} = mongoose

mongoose.connect(process.env["MONGO"])
const userSchema = new Schema({
    "Name":String,
    "count":Number,
    "logs":[
      {
          "description": String,
          "duration": Number,
          "date": String,
      }
         ]    
   }) 
const User = mongoose.model('User',userSchema)

const createAndSave= (userName)=>{
    const doc = new User({Name:userName})
    doc.save(function(err,data){
      if(err){
        console.log(err)
      }else{
        console.log("saving data",data)
        return data
      }
    })
  }
const findUser= (userName)=>{
    User.findOne({Name:userName},function(err,data){
      if(err){
        console.log(err)
      }else{
        return done(null,data)
      }
    })
  }
const findAllUsers=()=>{
    User.find({},function(err,data){
      if(err){
        console.log(err)
      }else{
        console.log("saving data",data)
        return data
      }
    })
  }



exports.User=User
exports.userSchema =userSchema
exports.createAndSave=createAndSave
exports.findUser=findUser
exports.findAllUsers=findAllUsers
