// this db setup is for CRUD Opertions (async callback)
require('dotenv').config();
const { MongoClient } = require('mongodb');

async function main (callback){

  const URI = process.env["MONGO"]
  const db = new MongoClient (URI,{useUnifiedTopology: true  })
console.log("mongo Connected")
   
  try {

    await db.connect()
    await callback(db)

  }catch(e){
    console.log(e,"mongo err")
  }
  }

  
   const User = 


  exports.main = main
  console.log(module.exports,"exports from main.db")



