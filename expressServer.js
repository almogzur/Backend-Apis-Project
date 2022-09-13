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
    const testprash = new Date(Date.parse(SRparms))
    
    function addZero(i) {
      if (i < 10) {i = "0" + i}
      return i;
    }
    //////

    if(SRparms == undefined){
      console.log(SRparms,"from undefined")
      const def = new Date() ; // defult 
      let s = addZero(def.getSeconds());
      let h = addZero(def.getHours());
      let m = addZero(def.getMinutes());
      let day =def.getDay()
      let date =def.getDate()
      let month = def.getMonth()
      let year= def.getFullYear()
    res.json({
    "unix":def.getTime(),
    "utc":`${daysarr[day]}, ${date} ${monthsarr[month]} ${year} ${h}:${m}:${s} GMT`})
  } 

   else if(testNum){ // if the passed parms are can be converted to number the this invoke
    const time = new Date(testNum)
    console.log(SRparms, "from unix ")
    let H= addZero(time.getHours())
    let M= addZero(time.getMinutes())
    let S= addZero(time.getSeconds())
    let day =time.getDay()
    let date =time.getDate()
    let month = time.getMonth()
    let year= time.getFullYear()
    res.json({"unix":testNum,"utc":`${daysarr[day]}, ${date} ${monthsarr[month]} ${year} ${H}:${M}:${S} GMT`})
  }
   else if( testprash != ER){ 
    console.log(SRparms , "from string prash ")
    const time = testprash
    let s = addZero(time.getSeconds());
    let h = addZero(time.getHours());
    let m = addZero(time.getMinutes());
    res.json({"unix":time.getTime(),"utc":`${daysarr[time.getDay()]}, ${time.getDate()} ${monthsarr[time.getMonth()]} ${time.getFullYear()} ${h}:${m}:${s} GMT`})
   } 
   else{
    res.json({"error":ER})
   }
  }
)


module.exports = app // for GL