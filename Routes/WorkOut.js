const findUser = require('../db.schema').findUser
const saveUser = require('../db.schema').saveUser
const findAllUsers = require('../db.schema').findAllUsers
const updateUser = require('../db.schema').updateUser
const findLastLog = (arr)=>{ return arr[arr.length-1]}
const addZero = (i)=> {if (i < 10){i = "0" + i} return i; }
const Time = new Date()
const day =addZero(Time.getDate())
const month = addZero(Time.getMonth()+1)
const year= addZero(Time.getFullYear())


exports.WorkOut=  async function WorkOut(app){
    
 app.route('/workout/api/:users?')
    .post(async (req,res,next)=>{
          console.log("POST /workout/api/:user?")
          console.log(req.body)
          const userName = req.body.username   

              const dbres = findUser(userName).then((data)=>data)
              const user= await dbres
                if(user){ res.send({username:user.username,"_id":user._id}) }
                else{         
                   const dbres = saveUser(userName).then((data)=>data)
                   const user= await dbres
                      res.send({username:user.username,"_id":user._id})
                        })
    .get(async (req,res,next)=>{
         console.log("GET ,/workout/api/:user?")
         console.log(req.params,req.body,req.query)
         let user = req.params.users
         
         if(user=="users"){
          console.log("users req")
          const dbres = findAllUsers().then((data)=>data)
          const list = await dbres
          res.send(list)
         }
  })
  app.route('/workout/api/users/:_id?/:Dataneeted?')

  .post(async (req,res,next)=>{
    const reqBody = req.body
    console.log("POST /workout/api/users/:_id/Dataneeted ", req.params)
    const id = req.params._id
    const jbody= req.body 
    const des = jbody.description
    const dur = jbody.duration
    const date = jbody.date? jbody.date: `${year}-${month}-${day}`


    // Forming Update json to mongo 
    const logObj= {
      "description":des,
      "duration":dur,
      "date":date
    }

    // sending update (user id , log json)
     const dbreq = updateUser(id,logObj)

     // mongo responce 

     const userUptades = await dbreq
         console.log(
           findLastLog(userUptades.logs) ,
           userUptades.logs.length
           )
      // mongo responce . log

      if(userUptades.logs.length > 0){ // if user hse logs return the last log object of the array 

        const lastLogDate = findLastLog(userUptades.logs).date 
        const lastLogDuration = findLastLog(userUptades.logs).duration 
        const lastLogDescription = findLastLog(userUptades.logs).description

        const sendJson = {
          "username":userUptades.username,
          "description":lastLogDescription,
          "duration":lastLogDuration,
          "date":lastLogDate,
          "_id":userUptades._id
        
         }

        res.send(sendJson) 
      }else { 
        console.log("No Logs ")
        res.send({
          "id":userUptades._id,
          "username":userUptades.username,
          "logs":"No Logs"
        })
      }
 
  })
  .get(async(req,res,next)=>{
    const body =req.body
    const Dataneeted = req.params
    console.log("Get",body,Dataneeted)

  })

  } 

console.log(module.exports,"exports from WorkOut")



