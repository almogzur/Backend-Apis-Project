require('dotenv').config();
const mongoose = require('mongoose');
const {Schema} = mongoose
const autoIncrement = require('mongoose-auto-increment');

mongoose.connect(process.env["MONGO"])

 const userSchema = new Schema({
    "Name":String,
    "seq":{type:Number,default:0},
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
  console.log("findUserOrSave Inv")

    User.findOne({Name:userName},function(err,user){

      console.log("find func inv ")

        if(err){ console.log(err)}
        else if(user){ console.log(user,"FinD")}

        else{
            const doc = new User ({Name:userName})
            doc.save(function(err,data){

              console.log("save function inv ")

              if(err){
                console.log(err,"Svae")
              }else{
                console.log(data)}
               })
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

 

exports.userSchema =userSchema
exports.findUserOrSave=findUserOrSave
exports.findAllUsers=findAllUsers





