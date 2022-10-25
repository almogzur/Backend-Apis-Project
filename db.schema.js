// db setup for Modle || doc calls 
require('dotenv').config();
const mongoose = require('mongoose');
const {Schema} = mongoose
const ObjectId = require('mongodb').ObjectID;

function nCallback (err,data,from){
   //console.log(from? from: null)
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
async function findUserById (id){
  //console.log("findUserById")
  const dbreq = User.findOne({"_id":id},nCallback(null,null,"findUserById"))
  const data=  await dbreq
  return data
}
async function findUserByName(userName){
 //console.log("findUser Inv")
 const userdata = await User.findOne({"username":userName},nCallback(null,null,"find"))
   return userdata
}
async function saveUser(userName){
  const doc = new User({username:userName})
     const data =  doc.save(nCallback(null,null,"save"))
      return data
}
async function findAllUsers(){
    const data = User.find({},nCallback(null,null,"findAll"))
    return data
}
async function updateUser(id,log){
  if(id.length == 24){
    const dbreq =  User.findOneAndUpdate(
        {'_id': id},// finnd 
        { $push:{"logs":log}},// update
        {new:true,},
        nCallback(null,null,"update"),//callback
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
        nCallback(null,null,"update" )
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





