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
    const def = new Date() ; // defult 
    const str = new Date(SRparms);  // string
    const num = new Date(Number(SRparms)); // number 
    const daysarr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    const monthsarr= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",]
    function addZero(i) {
      if (i < 10) {i = "0" + i}
      return i;
    }
    let h = addZero(def.getHours());
    let m = addZero(def.getMinutes());
    let s = addZero(def.getSeconds());
    //////
    let strH= addZero(str.getHours());
    let strM= addZero(str.getMinutes());
    let strS= addZero(str.getSeconds());

    let numH= addZero(num.getHours())
    let numM= addZero(num.getMinutes())
    let numS= addZero(num.getSeconds())
    ///////// 
    console.log(str,num)
    if(SRparms == undefined){
    res.json({
    "unix":def.getTime(),
    "utc":`${daysarr[def.getDay()]}, ${def.getDate()} ${monthsarr[def.getMonth()]} ${def.getFullYear()} ${h}:${m}:${s} GMT`})
    } 
     else if(str != ER){
      console.log("s ok ")
      res.json({
        "unix":str.getTime(),
        "utc":`${daysarr[str.getDay()]}, ${str.getDate()} ${monthsarr[str.getMonth()]} ${str.getFullYear()} ${strH}:${strM}:${strS} GMT`

      })
    }else if(num != ER){
      res.json({
        "unix":req.params.data,
        "utc":`${daysarr[num.getDay()]}, ${num.getDate()} ${monthsarr[num.getMonth()]} ${num.getFullYear()} ${numH}:${numM}:${numS} GMT`
      })
    }else if(num&&str == ER){
      res.json({"error":ER})
    }
    console.log("incoming req at /api:date" , SR   )
  }
)


module.exports = app // for GL