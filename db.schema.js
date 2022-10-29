// db setup for Modle || doc calls 
require('dotenv').config();
const mongoose = require('mongoose');
const {Schema} = mongoose

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

async function gFind  (id,Squary){
  console.log("Quary Serch... ")
  const input = id.length == 24 ?  "_id"  : "username" ; console.log("input", input, "id",id)
  const sFrom = Squary.from;
  const sTo = Squary.to;
  const sLimit = Squary.limit

          if(input == "_id"){ 
            // 3 quary options from to  limit set them as constent for exprtion use
          
                      if(sFrom&&sTo){
                        console.log(sFrom,sTo,"Serching From To ",sFrom,sTo)
                        const dbres = await User.findById({"_id":id},{},{},nCallback())
                            return dbres
                      }else if(sLimit){
                         console.log(sLimit)
                          }
            
          }else{
            const dbres= await  User.findOne({"username":id},nCallback)
            return dbres
          }

    }
  
    
 
  
async function findUserById (id){
   const dbreq = await User.findById({"_id":id},nCallback())
   return dbreq
  
}
async function findUserByName(userName){
   const userdata = await User.findOne({"username":userName},nCallback())
   return userdata
  
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
exports.gFind=gFind





