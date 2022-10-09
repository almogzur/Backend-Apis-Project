const ObjectId = require('mongodb').ObjectID;

exports.WorkOut= function WorkOut(app,db){

    db(async(callback)=>{

  const db_users = await callback.db("WorkOut").collection("users")
  const db_log = await callback.db("WorkOut").collection("logs")
  const db_exercises= await callback.db("WorkOut").collection("exercises")

  app.route('/api/workout/:_id/')
  .post((req,res,next)=>{
    

  })

  .get((req,res,next)=>{

  })

  app.route('/api/workout/user')

    })
}
