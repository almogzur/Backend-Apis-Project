const findUserOrSave = require('../db.schema').findUserOrSave
const findAllUsers = require('../db.schema').findAllUsers

  exports.WorkOut= function WorkOut(app){
    app.route('/workout/api/:users?')

      .post((req,res,next)=>{
          console.log("POST /workout/api/:user?/")
          console.log(req.body)
          const inputUser = req.body.user;
          const userName = req.body.username
          if(inputUser){
            findUserOrSave(inputUser)
          }else if(userName){
            findUserOrSave(userName)
          }
          else{
            console.log("no user")
          }
          
  })
      .get((req,res,next)=>{
         console.log("GET ,/workout/api/:user?")
         console.log(req.body,req.parms,req.quary)
         const parms = req.parms
         const quary = req.quary
  })
  app.route('/workout/api/users/:_id?/exercises')
  .post((req,res,next)=>{
    console.log("POST /workout/api/users/:_id/exercises ")

  })
   .get((req,res,next)=>{
    console.log("GET /workout/api/users/:_id/exercises ")
   })
  }

console.log(module.exports,"exports from WorkOut")


