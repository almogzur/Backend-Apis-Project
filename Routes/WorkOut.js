exports.WorkOut= function WorkOut(app,User){

  const createAndSave = require('../db.schema').createAndSave
  const findUserOrSave = require('../db.schema').findUserOrSave
  const findAllUsers = require('../db.schema').findAllUsers

    app.route('/workout/api/:users?')
      .post((req,res,next)=>{
          console.log("POST /workout/api/:user?/")
          console.log(req.body)
          const inputUser = req.body.user;
          findUserOrSave(inputUser)
        
         
        
  })
      .get((req,res,next)=>{
         console.log("GET ,/workout/api/:user?")
         console.log(req.body,req.parms,req.quary)
         const parms = req.parms
         const quary = req.quary
         doc.find({})
         console.log(doc)
  

  })
  
   
  }

console.log(module.exports,"exports from WorkOut")


