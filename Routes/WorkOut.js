const findUserOrSave = require('../db.schema').findUserOrSave
const findAllUsers = require('../db.schema').findAllUsers
const timestamp = Math.floor(new Date().getTime()/1000);
let sdata ;
  exports.WorkOut=  async function WorkOut(app){
    
    app.route('/workout/api/:users?')

      .post(async (req,res,next)=>{
          console.log("POST /workout/api/:user?/")
          console.log(req.body)
          const inputUser = req.body.user;
          const userName = req.body.username
          
          if(inputUser){
            const user = findUserOrSave(userName)
            console.log("ex data",user)
           // res.json({"username":"user"})
          }else if(userName){
             const user = findUserOrSave(userName)
            console.log("ex data",user)
          }
          else{
            console.log("no user")
          }      
  })
      .get(async (req,res,next)=>{
         console.log("GET ,/workout/api/:user?")
         console.log(req.body,req.parms,req.quary)
         const parms = req.parms
         const quary = req.quary
  })
  app.route('/workout/api/users/:_id?')
  .post((req,res,next)=>{
    console.log("POST /workout/api/users/:_id/exercises ")

  })
   .get((req,res,next)=>{
    console.log("GET /workout/api/users/:_id/exercises ")
   })
  }

console.log(module.exports,"exports from WorkOut")


