// db setup for Modle || doc calls 
require('dotenv').config();
const mongoose = require('mongoose');
const {Schema} = mongoose
const ObjectId = require('mongodb').ObjectID;

function nCallback (err,data){
      if(err)return console.error(err)
      return data
}
mongoose.connect(process.env["MONGO"], 
{
  useNewUrlParser: true,
  useFindAndModify: false
}
  );
 const userSchema = new Schema(
             {
               "username":String,  
               "count":"Number",
               "logs":[{
                   _id: false,
                   "description":String,
                   "duration":Number,
                   "date":String,
              }],
              
     },{ versionKey: false }) 
 const User = mongoose.model('User',userSchema)

 //const userCount= User.count({},nCallback)
async function findUserById (id,Squery){

  if(Object.keys(Squery).length != 0){
    console.log("Quary Find")
    const dbreq = await User.findOne({"_id":id},null,{Squery},nCallback())
    return dbreq
   }else{
    console.log("Noraml Find")
     const dbreq = await User.findOne({"_id":id},nCallback())
     return dbreq
  }
}
async function findUserByName(userName,Squery){

  if(Squery && Object.keys(Squery).length !== 0){
      console.log("Quary Find")
    const userdate= await(User.find({"username":userName},null,{Squery},nCallback()))
    return userdate

  }else{
    console.log("Noraml Find")
   const userdata = await User.findOne({"username":userName},nCallback())
   return userdata
  }
}
async function saveUser(userName){
  const doc = new User({username:userName})
     const data =  doc.save(nCallback())
      return data
}
async function findAllUsers(){
    const data = User.find({},nCallback())
    return data
}
async function updateUser(id,log){
  if(id.length == 24){
    const dbreq =  User.findOneAndUpdate(
        {'_id': id},// finnd 
        { $push:{"logs":log}},// update
        {new:true,},
        nCallback(),//callback
        )
        const data = await dbreq
        return data 
  }else{
    const dbreq = User.findOneAndUpdate(
        {"username":id}, 
        {$push:{"logs":log}},
        {
          new:true,
         
        },
        nCallback()
    )
    const data = await dbreq
    return data
  }
     
}
exports.updateUser=updateUser
exports.findUserByName =findUserByName
exports.saveUser=saveUser
exports.findAllUsers=findAllUsers
exports.findUserById=findUserById





