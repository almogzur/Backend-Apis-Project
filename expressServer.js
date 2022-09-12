'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 
const session = require('express-session');
const mongoose = require("mongoose");
const cookieParser= require('cookie-parser');
const path = require("path");
require('dotenv').config();
const PORT = 80
app.use(bodyParser.urlencoded({extended: false}));
const ER = "Invalid Date"

app.use(
   session({
   secret: process.env["ESSION_SECRET"],
   resave: true,
   saveUninitialized: true,
   cookie: { secure: false },
   key:'express.sid',
 }));

 const DATE  = new Date()
 const day = DATE.getDay() ; 
 const month = DATE.getMonth()
 const monthname = DATE.getUTCDate();
 const year = DATE.getFullYear();

console.log("from console Dir Name  => ",__dirname);
console.log("time format " , day,"|" , month,"|" , monthname,"|" , year,"|" )
console.log("time format " , Date(123), new Date(123) )

 
app.use(express.static(path.join(__dirname, "front", "build")))
  
app.get("/",(req, res )=>{  
  res.sendFile(path.join(__dirname, "front", "build", "index.html"))
  })

app.use("/api/:data?",(req, res, next) => {  
    const SR = req.params ; // Server Req 
    const SRparms = req.params.data ;  // SR parms 
    const s = new Date(SRparms);  // string
    const n = new Date(Number(SRparms)); // number 
    let daysarr = ["Sun","Mon","Tuse","Wed","Thu","Fri","Sat"]
    let monthsarr= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",]

    console.log("incoming req at /api:date" , SR  , SRparms )

  if( SRparms == undefined){
    res.json({"unix":DATE.getTime() , "utc":`${daysarr[DATE.getDay()]}, ${DATE.getDate()} ${monthsarr[DATE.getMonth()]} ${DATE.getFullYear()} ${DATE.getHours() }:${DATE.getMinutes()}:${DATE.getSeconds()} GMT `})
    } 
  }
)


module.exports = app // for GL