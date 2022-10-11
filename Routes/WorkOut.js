const ObjectId = require('mongodb').ObjectID;

const userSchema= require('../db.schema').userSchema
exports.WorkOut= function WorkOut(app,db){

    db(async(callback)=>{

  const db_users = await callback.db("WorkOut").collection("users")
  
  app.route('/workout/api/:users')
  .post((req,res,next)=>{
    console.log("POST /api/workout")
    console.log(req.body)
    const inputUser = req.body.user
      
    db_users

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
    })
  }

