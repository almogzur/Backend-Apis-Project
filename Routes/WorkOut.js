
exports.WorkOut= function WorkOut(app,db){

  db(async(callback)=>{

   const db_users = await callback.db("WorkOut").collection("users")
   
   const userSchema= require('../db.schema').userSchema

   const USERDATA = db.model('USERDATA', userSchema); 

    app.route('/workout/api/:user?')
      .post((req,res,next)=>{
          console.log("POST /api/workout")
          console.log(req.body)
          const inputUser = req.body.user
          USERDATA.find(USERDATA,function(err,user){
            if(err){
              console.log(err)
            }else if(user){
              res.json({user:user})
            }else{
              //USERDATA.save()
              console.log("user data else ")
            }
          })
       
  })
      .get((req,res,next)=>{
         console.log("GET , Api/WorkOut")
         const parms = req.parms
         const quary = req.quary
  })
    })
  }

console.log(module.exports,"exports from WorkOut")


