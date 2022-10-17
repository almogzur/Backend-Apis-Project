// db setup for Modle || doc calls 
require('dotenv').config();
const mongoose = require('mongoose');
const {Schema} = mongoose
const ObjectID = require('mongodb').ObjectID

function nCallback (err,data){
   console.log("callback invoke",)
      if(err)return console.error(err)
      return data
}
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

const findUser  = async(userName)=>{
 console.log("findUser Inv")
 const userdata = await User.findOne({"username":userName},nCallback)
   return userdata
}
const saveUser =async (userName)=>{
  console.log("save invk")
  const doc = new User({username:userName},nCallback)
     const data =  doc.save(nCallback)
      return data
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
exports.findUser =findUser
exports.saveUser=saveUser
exports.findAllUsers=findAllUsers





