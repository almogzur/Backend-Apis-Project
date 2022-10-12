exports.WorkOut= function WorkOut(app,User){


    app.route('/workout/api/:user?')
      .post((req,res,next)=>{
          console.log("POST /api/workout")
          console.log(req.body)
          const inputUser = req.body.user
          const doc = new User({
            Name: inputUser
          })
          console.log(doc)

       
  })
      .get((req,res,next)=>{
         console.log("GET , Api/WorkOut")
         const parms = req.parms
         const quary = req.quary
  })
    app.route('/workout/api/user/:_id?/exercises')
    .post((req,res,next)=>{
       console.log("POST workout/api/user/:_id?/exercises'")
    })
    .get((req,res,next)=>{
      console.log("GET workout/api/user/:_id?/exercises'")
    })
  }

console.log(module.exports,"exports from WorkOut")


