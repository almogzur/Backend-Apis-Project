const findUser = require('../db.schema').findUser
const saveUser = require('../db.schema').saveUser
const findAllUsers = require('../db.schema').findAllUsers
const updateUser = require('../db.schema').updateUser
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
          if(userName){
              const dbres = findUser(userName).then((data)=>data)
              const user= await dbres
              console.log(user,"db res")
                if(user){
                  res.send({username:user.username,"_id":user._id})
                }
                    else{
                        
                        const dbres = saveUser(userName).then((data)=>data)
                        const user= await dbres
                        if(user){  
                           res.send({username:user.username,"_id":user._id})
                      }
                        }
          }
          else{
            console.log("Error No User")
            res.send({"Error":"No User"})
          }      
  })
    .get(async (req,res,next)=>{
         console.log("GET ,/workout/api/:user?")
         console.log(req.params)
         let user = req.params.users
         
         if(user=="users"){
          console.log("users req")
          const dbres = findAllUsers().then((data)=>data)
          const list = await dbres
          res.send(list)
         }
  })
  app.route('/workout/api/users/:id?/:Dataneeted?')
  .post(async (req,res,next)=>{
    const reqBody = req.body
    console.log("POST /workout/api/users/:_id/Exercises|Logs ", req.params)
    const id = req.params.id
    const jbody= req.body 
    const des = jbody.description
    const dur = jbody.duration
    const date = jbody.date? jbody.date: `${year}-${month}-${day}`

    const logObj= {
      "description":des,
      "duration":dur,
      "date":date
    }
     const dbreq = updateUser(id,logObj)
     const userUptades = await dbreq

    // console.log(userUptades)
  })
  .get(async(req,res,next)=>{
     const Dataneeted = req.params.Dataneeted
    if(Dataneeted=="logs"){
      console.log("Log Req")
    }
  })
  }

console.log(module.exports,"exports from WorkOut")



