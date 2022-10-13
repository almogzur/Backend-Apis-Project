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

const findUserOrSave= (userName)=>{
    User.findOne({Name:userName},(err,user)=>{
        if(err){return console.error(err)}
        else if(user){
            console.log(user)
        }else{
            const doc = new User ({Name:userName})
            doc.save().then((doc)=>{{
                console.log(doc,"save seccsesxs")
            }})
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
exports.findUserOrSave=findUserOrSave
exports.findAllUsers=findAllUsers
