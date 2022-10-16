// db setup for Modle || doc calls 
require('dotenv').config();
const mongoose = require('mongoose');
const {Schema} = mongoose
const ObjectID = require('mongodb').ObjectID

mongoose.connect(process.env["MONGO"], 
{
  useNewUrlParser: true,
  useFindAndModify: false
}
  );

 const userSchema = new Schema({
    "username":String,  
   }) 
 const User = mongoose.model('User',userSchema)

 const ExerciseSchema = new Schema({
    "username":userSchema.path('username'),
    "_id":userSchema.path('_id'),
    "description":String,
    "duration":Number,
    "data":String,
    
 })
 const Exercise= mongoose.model('Exercise',ExerciseSchema)

 const LogSchema = ({
   username:String,
   count:Number,
   logs:[{
    ref:ExerciseSchema.path('description'),
   }],
   
})
const logs = mongoose.model('Logs',LogSchema)

const findUserOrSave = (userName)=>{

 console.log("findUserOrSave Inv")

    const userdata =  User.findOne({"username":userName},
              function(err,user){
                        console.log("find func inv ")
                          if(err){  console.log(err),"err"}
                          else if(user){ //find
                                      // console.log(user._id,"FinD")
                                 return user 
                                        }
                           else{//save
                            console.log("didnt find saving ...")
                           const doc = new User ({"username":userName})
                             doc.save(function(err,data){
                                    console.log("save function inv ")
                                     if(err){ console.log(err,"Svae") }
                                      else{ return data  }
                                           })
                                             return doc    
                                        }
    })
   return userdata
}
 const findAllUsers=()=>{
    User.find({},function(err,data){
      if(err){
        console.log(err)
      }else{
        console.log(data)     
        return data
      }
    })
  }

exports.userSchema =userSchema
exports.findUserOrSave=findUserOrSave
exports.findAllUsers=findAllUsers





