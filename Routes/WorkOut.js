exports.WorkOut= function WorkOut(app,User){


    app.route('/workout/api/:users?')
      .post((req,res,next)=>{
          console.log("POST /workout/api/:user?/")
          console.log(req.body)
          const inputUser = req.body.user 
          User.save((done)=>{
            
          })
       
  })
      .get((req,res,next)=>{
         console.log("GET ,/workout/api/:user?")
         console.log(req.body,req.parms,req.quary)
         const parms = req.parms
         const quary = req.quary
  

  })
    app.route('/workout/api/users/:_id?')
    .post((req,res,next)=>{
       console.log("POST workout/api/user/:_id?")
    })
    .get((req,res,next)=>{
      console.log("GET workout/api/user/:_id?")
      console.log(req.body,req.parms,req.quary)
    })
  }

console.log(module.exports,"exports from WorkOut")


