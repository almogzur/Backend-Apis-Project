const express = require("express");
const app = express(); 
const corsOptions = {
    origin:"https://www.freecodecamp.org",
    optionsSuccessStatus: 200
  }
  const howami = express.Router() 

function howani (){
  
   howami.get("/",(req,res,next)=>{
    console.log(req.headers)
   })

}

module.exports = howani