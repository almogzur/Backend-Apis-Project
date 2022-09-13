'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 
const session = require('express-session');
const cookieParser= require('cookie-parser');
const cors = require("cors")
const path = require("path");
const ER = "Invalid Date"

require('dotenv').config();
app.use(bodyParser.urlencoded({extended: false}));

app.use(
  session({
  secret: process.env["ESSION_SECRET"],
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
  key:'express.sid',
}));


const corsOptions = {
  origin:"https://www.freecodecamp.org",
  optionsSuccessStatus: 200
}
app.use(express.static(path.join(__dirname, "front", "build")))
  
app.get("/",(req, res )=>{  
  res.sendFile(path.join(__dirname, "front", "build", "index.html"))
  })

app.use("/api/:data?",cors(corsOptions),(req, res, next) => {  
    const SR = req.params ; // Server Req 
    const SRparms = req.params.data ;  // SR parms 
    const daysarr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const monthsarr= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",]
    const testNum = Number(SRparms) // to chack parms is number in unix format 
    const testprash = Date.parse(SRparms)
    
    function addZero(i) {
      if (i < 10) {i = "0" + i}
      return i;
    }
    //////

    if(SRparms == undefined){
      const def = new Date() ; // defult 
      let s = addZero(def.getSeconds());
      let h = addZero(def.getHours());
      let m = addZero(def.getMinutes());
    res.json({
    "unix":def.getTime(),
    "utc":`${daysarr[def.getDay()]}, ${def.getDate()} ${monthsarr[def.getMonth()]} ${def.getFullYear()} ${h}:${m}:${s} GMT`})
  } 

   else if(testNum){
    const time = new Date(testNum)
    console.log(time, "from unix ")
    let unixH= addZero(time.getHours())
    let unixM= addZero(time.getMinutes())
    let unixS= addZero(time.getSeconds())

    res.json({"unix":test,"utc":`${daysarr[time.getDay()]}, ${time.getDate()} ${monthsarr[time.getMonth()]} ${time.getFullYear()} ${unixH}:${unixM}:${unixS} GMT`})

  }
   else if( testprash != ER ){

    const time =  Date.parse(SRparms)
    console.log(time , "from strig")

   } 
   else{
    res.json({"error":ER})
   }
    console.log("incoming req at /api:date" , SR   )
  }
)


module.exports = app // for GL