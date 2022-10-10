const ObjectId = require('mongodb').ObjectID;

exports.WorkOut= function WorkOut(app,db){

    db(async(callback)=>{

  const db_users = await callback.db("WorkOut").collection("users")
  const db_log = await callback.db("WorkOut").collection("logs")
  const db_exercises= await callback.db("WorkOut").collection("exercises")

  app.route('/workout/api/:users')
  .post((req,res,next)=>{
    console.log("POST /api/workout")
    console.log(req.body)
    //console.log("body ,",req.body)
    //console.log( "quary",req.quary)
    res.json({"req":req.body})
  })
  .get((req,res,next)=>{
    console.log("GET , Api/WorkOut")
    const parms = req.parms
    const quary = req.quary
   // console.log(parms,"<=req params")
    console.log( req.body)
    //res.json({"req":parms})
  })

  app.route('workout/api/user/:_id/data/')
  .post((req,res,next)=>{
    console.log("POST","workout/api/user/:_id/data/")

  })
  .get((req,res,next)=>{
    console.log("GET","workout/api/user/:_id/data/")
  })
    })
  }

