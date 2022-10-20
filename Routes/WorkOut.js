const findUser = require('../db.schema').findUser
const saveUser = require('../db.schema').saveUser
const findAllUsers = require('../db.schema').findAllUsers
const updateUser = require('../db.schema').updateUser
const timestamp = Math.floor(new Date().getTime()/1000);

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
                        console.log("no user in db ")
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
         let user = req.params.users

         if(user=="users"){
          console.log("users req")
          const dbres = findAllUsers().then((data)=>data)
          const list = await dbres
          res.send(list)
         }
         console.log(user)


  })
  app.route('/workout/api/users/:_id?/:exercises?')
  .post(async (req,res,next)=>{
    const reqBody = req.body
    console.log("POST /workout/api/users/:_id/exercises ")
    const id = req.params._id
    const jbody= req.body 
    const des = jbody.description
    const dur = jbody.duration
    const date = jbody.date
     console.log(id,des,dur,date)
  })
  .get((req,res,next)=>{
    console.log("GET /workout/api/users/:_id/exercises ")
   })
  }

console.log(module.exports,"exports from WorkOut")


