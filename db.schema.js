// db setup for Modle || doc calls 
require('dotenv').config();
const mongoose = require('mongoose');
const {Schema} = mongoose
const ObjectId = require('mongodb').ObjectID;

function nCallback (err,data,from){
   console.log("callback invoke",from? from: arguments)
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
               "logs":[{
                "description":String,
                "duration":Number,
                "data":String
              }],
               "count":"",
                 },
                 { versionKey: false }) 
 const User = mongoose.model('User',userSchema)

 //const userCount= User.count({},nCallback)

async function findUser(userName){
 console.log("findUser Inv")
 const userdata = await User.findOne({"username":userName},nCallback(null,null,"find"))
   return userdata
}
async function saveUser(userName){
  console.log("save invk")
  const doc = new User({username:userName})
     const data =  doc.save(nCallback(null,null,"save"))
     console.log( doc,"saved user ")
      return data
}
async function findAllUsers(){
    const data = User.find({},nCallback(null,null,"findAll"))
    return data
}
async function updateUser(id,log){
  console.log("update",log)
  const  hexreg = /[0-9A-Fa-f]{24}/g;
  const hexid = id.match(hexreg)
  if(hexid){
    const dbreq =  User.updateOne(
      {'_id': hexid},// finnd 
        {
          $push:{"logs":log}
        },// update
        nCallback(null,null,"update"),//callback
        )
        const data = await dbreq
        return data 
  }else{
    const dbreq = User.updateOne(
        {userename:id},// finnd 
        {
          $push:{"logs":log}
        },// update
        nCallback(null,null,"update" ),//callback 
    )
    const data = await dbreq
    return data
  }
     
}
exports.updateUser=updateUser
exports.findUser =findUser
exports.saveUser=saveUser
exports.findAllUsers=findAllUsers





