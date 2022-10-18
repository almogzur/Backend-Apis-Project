// db setup for Modle || doc calls 
require('dotenv').config();
const mongoose = require('mongoose');
const {Schema} = mongoose

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
                 }, { versionKey: false }) 
 const User = mongoose.model('User',userSchema)

 const ExerciseSchema = new Schema({
    "username":userSchema.path('username'),
    "_id":userSchema.path('_id'),
    "description":String,
    "duration":Number,
    "data":String,
    
 }, { versionKey: false })
 const Exercise= mongoose.model('Exercise',ExerciseSchema)

 const LogSchema = ({
   username:String,
   count:Number,
   logs:[{
    ref:ExerciseSchema.path('description'),
   }],
   
}, { versionKey: false })
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
     console.log( doc,"saved user ")
      return doc
}
const findAllUsers=()=>{
    const data = User.find({},nCallback)
    return data
  }

exports.userSchema =userSchema
exports.findUser =findUser
exports.saveUser=saveUser
exports.findAllUsers=findAllUsers





