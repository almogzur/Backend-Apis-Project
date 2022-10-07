const ObjectId = require('mongodb').ObjectID;

exports.WorkOur= function(app,db){

    db(async(callback)=>{

  const db_users = await callback.db("WorkOut").collection("users")
  const db_log = await callback.db("WorkOut").collection("logs")
  const db_exercises= await callback.db("WorkOut").collection("exercises")


  app.route('/api/users/:_id/')
  .post((req,res,next)=>{

  })

  .get((req,res,next)=>{

  })

    })
}
