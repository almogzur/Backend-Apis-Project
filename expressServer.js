// i change cros Main path file to match "server.js",
// defult config is lokking for index.js 

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

const corsOptions = {
  origin:"https://www.freecodecamp.org/",
  optionsSuccessStatus: 200
}

app.use(
   session({
   secret: process.env["ESSION_SECRET"],
   resave: true,
   saveUninitialized: true,
   cookie: { secure: false },
   key:'express.sid',
 }));


console.log("from console Dir Name  => ",__dirname);

app.use(express.static(path.join(__dirname, "front", "build")))
  
app.get("/",(req, res )=>{  
  res.sendFile(path.join(__dirname, "front", "build", "index.html"))
  })

app.use("/api/:data?",cors(corsOptions),(req, res, next) => {  
    const SR = req.params ; // Server Req 
    const SRparms = req.params.data ;  // SR parms 
    const s = new Date(SRparms);  // string
    const n = new Date(Number(SRparms)); // number 
    let daysarr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    let monthsarr= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",]

    console.log("incoming req at /api:date" , SR   )

  if(SRparms == undefined){
    res.json({
    "unix":new Date().getTime(),
    "utc":`${daysarr[new Date().getDay()]}, ${new Date().getDate()} ${monthsarr[new Date().getMonth()]} ${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} GMT`})
    } 
  }
)


module.exports = app // for GL