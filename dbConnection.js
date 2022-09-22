
require('dotenv').config();

const { MongoClient } = require('mongodb');


async function main (callback){

  const URI = process.env["MONGO"]
 

  const db = new MongoClient (URI,{  
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const status = db.serverStatus;

  console.log(status)
  try {
    await db.connect()
    await callback(db)

  }catch(e){
    console(e)
  }
  }


  exports.main = main



