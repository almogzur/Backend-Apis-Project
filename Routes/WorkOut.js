const findUserByName = require('../db.schema').findUserByName
const saveUser = require('../db.schema').saveUser
const findAllUsers = require('../db.schema').findAllUsers
const updateUser = require('../db.schema').updateUser
const findUserById = require('../db.schema').findUserById
const findLastLog = (arr)=>{ return arr[arr.length-1]}
const addZero = (i)=> {if (i < 10){i = "0" + i} return i; }
const daysarr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
const monthsarr= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",]
const Time = new Date()
const day =Time.getDay()
const Tdate =addZero(Time.getDate())
const month = addZero(Time.getMonth()+1)
const year= addZero(Time.getFullYear())

exports.WorkOut=  async function WorkOut(app){
    
 app.route('/workout/api/:users?')
    .post(async (req,res,next)=>{ // user regester/find
     console.log("POST /workout/api/:user?") ;
     console.log(req.body)
          const userName = req.body.username   
          const dbres = findUserByName(userName).then((data)=>data)
          const user= await dbres
                if(user){ 
                    res.send({"username":user.username,"_id":user._id}) 
                 } else{         
                    const dbres = saveUser(userName).then((data)=>data)
                    const user= await dbres
                       res.send({username:user.username,"_id":user._id})
                        }
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

    console.log("POST /workout/api/users/:_id/Dataneeted ", req.params)
    const id = req.params._id
    const body= req.body 
    const des = body.description
    const dur = body.duration
    const bodyDate = new Date(body.date)
    const bodyDay= bodyDate.getDay() 
    const bodyMonth = bodyDate.getMonth()//bace 0 array of months 
    const bodyYear = bodyDate.getFullYear()
    const date = body.date? 

          `${daysarr[bodyDay]} ${monthsarr[bodyMonth]} ${addZero(bodyMonth+1)} ${bodyYear}` :

          `${daysarr[day]} ${monthsarr[month]} ${Tdate} ${year}`

    // Forming Update json to mongo 
    const logObj= { "description":des , "duration":dur , "date":date }

    // sending update (user id , log json)
     const dbreq = updateUser(id,logObj)
     const userUptades = await dbreq

       if(userUptades.logs.length > 0){ // if user hse logs return the last log object of the array 
           const lastLogDate = findLastLog(userUptades.logs).date 
           const lastLogDuration = findLastLog(userUptades.logs).duration 
           const lastLogDescription = findLastLog(userUptades.logs).description

           const responsesJson = {
                "username": userUptades.username,
                "description":lastLogDescription,
                "duration":lastLogDuration,
                "date":lastLogDate,
                "_id" :userUptades._id,
                            }
           res.json(responsesJson) 
      }
 
  })
  .get(async(req,res,next)=>{
       const params = req.params
        console.log("Get" ,"Id :",params._id,"Serching ... ")
       const dbreq = findUserById(params._id)
       const user = await dbreq
        console.log(user,params)

        const logsLength= user.logs.length

        const responceJson={
          "username":user.username,
            "count":logsLength,
            "_id":user._id,
            "logs":user.logs,
        }

         res.json(responceJson)
  })

  } 

console.log(module.exports,"exports from WorkOut")



