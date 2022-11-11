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
               "log":[{
                   _id: false,
                   "description":String,
                   "duration":Number,
                   "date":String
              }],
              
     },{ versionKey: false }) 

 const User = mongoose.model('User',userSchema)

 //const userCount= User.count({},nCallback)

async function quaryFind (id,Squary){
 
  // 3 quary options from to  limit set them as constent for exprtion use
      const sFrom = Squary.from;
      const sTo = Squary.to;
      const sLimit = Number(Squary.limit)

      // format dates 
      const fromStr = new Date(sFrom).toDateString()
      const toStr = new Date(sTo).toDateString()
    
       let arr=[] 

              if(sLimit&&sFrom&&sTo){ console.log("All Quarys Serch....",sFrom,sTo,sLimit)

                const quary =await User.findById(id,{
                                   log:{$elemMatch:
                                                  {
                                                  date:{$gte:fromStr}}
                                                                }
                                                                }
                                                                )
                return quary
                          
               console.log( quary)
                  
                    }
              else if(sFrom&&sTo){ console.log("Serching From To ",sFrom,sTo)
        
                 const quary = await User.findById(id)

                       quary.log.map(function(log){  
                                if( log.date > fromStr || log.date < toStr){
                                   arr.push(log) 
                                  }}
                                   )

                 const reJson ={  "_id":quary._id,  "username":quary.username,"log":arr }
                   
                      return reJson
                            }     
              else if(sLimit){  console.log("Serching Limit", sLimit,id)

                  const  quary = await User.findById( id , { "log" : { $slice: sLimit} },nCallback())  
                  
                       return quary
                    }
              else { console.log("Err Quary Serch")}
   
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
        { $push:{"log":log}},// update
        {new:true,},
        nCallback(),//callback
        )
        const data = await dbreq
        return data 
  }else{
    const dbreq = User.findOneAndUpdate(
        {"username":id}, 
        {$push:{"log":log}},
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
exports.quaryFind=quaryFind





