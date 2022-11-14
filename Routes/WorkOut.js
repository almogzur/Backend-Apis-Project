const findUserByName = require('../db.schema').findUserByName
const saveUser = require('../db.schema').saveUser
const findAllUsers = require('../db.schema').findAllUsers
const updateUser = require('../db.schema').updateUser
const findUserById = require('../db.schema').findUserById
const quaryFind = require('../db.schema').quaryFind
const findLastLog = (arr)=>{ return arr[arr.length-1]}

exports.WorkOut=  async function WorkOut(app){
    
app.route('/workout/api/:users?')
 .post(async (req,res,next)=>{ // user regester/find
     console.log("POST  /Workout/api/:user?" , req.body   ) ;
          const userName = req.body.username   
          const dbres = findUserByName(userName).then((data)=>data)
          console.log( "Serching For User  ... ")
          const user= await dbres
                if(user){ 
                     console.log("Sending User ... ")
                    res.send({"username":user.username,"_id":user._id}) 
                 } else{         
                  console.log( "Saveing User  ... ")
                    const dbres = saveUser(userName).then((data)=>data)
                    const user= await dbres
                    console.log("Sending Saved User ... ")
                       res.send({username:user.username,"_id":user._id})
                        }
  })
 .get(async (req,res,next)=>{
      const params = req.params
      console.log("Get Workout/api/:user? " ,params,"Serching ... ")

         const user = req.params.users
         if(user=="users"){
          const dbres = findAllUsers().then((data)=>data)
          const list = await dbres
         console.log("Sending User`s List")
          res.send(list)
         }
  })

app.route('/workout/api/users/:_id?/:exercises?')
 .post(async (req,res,next)=>{
       console.log("POST /Workout/api/users/:_id/Exercises ", req.params._id)
       //Req consts
    const id = req.params._id
    const body= req.body 
    const des = body.description
    const dur = body.duration
      // Forming Update json to mongo 
    const date = body.date?  new Date(body.date).toDateString() : new Date().toDateString()
    const logObj= { "description":des , "duration":dur , "date":date }
       // update user 
    console.log("Updating User ... ",logObj)
    const dbreq = updateUser(id,logObj)
    const userUptades = await dbreq
     // if user uptade was seccsessful 
          if (userUptades){

               console.log("Update Seccsessful  ", )
                 if(userUptades.log.length > 0){ // if user hse logs return the last log object of the array 
                  const lastLogDate = findLastLog(userUptades.log).date 
                  const lastLogDuration = findLastLog(userUptades.log).duration 
                  const lastLogDescription = findLastLog(userUptades.log).description

              const responsesJson = {
                    "username": userUptades.username,
                    "description":lastLogDescription,
                    "duration":lastLogDuration,
                    "date":lastLogDate,
                   "_id" :userUptades._id,
                         }
            res.json(responsesJson) 
                 }
                 else{

                 }

          }else{
          console.log("ERR Updating ")
           } 
  })
 .get(async(req,res,next)=>{

     const params = req.params
     
     const query = Object.keys(req.query).length === 0 ? null : req.query 

            console.log("Get Params : ",params , query ,"Serching ... " )

               if(query != null ){ 
                  const User= await quaryFind(params._id,query)
                  console.log(User,"Returnd Quary")
                  res.json(User)
               }
               else {
                  const User = await findUserById(params._id)
                  if(User){console.log("User Find",User)
                       const logsLength= User.log.length 

                       const responceJson={
                           "username":User.username,
                           "count":logsLength,
                           "_id":User._id,
                           "log":User.log,
                             }
                        console.log("Sending User",responceJson)
                     res.json(responceJson)
               }else {

                console.log("no User In DB")
               }

             
              }

  })
  } 

console.log(module.exports,"exports from WorkOut")



