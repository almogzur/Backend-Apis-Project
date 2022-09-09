'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 
const session = require('express-session');
const mongoose = require("mongoose");
const cookieParser= require('cookie-parser');
const path = require("path");
require('dotenv').config();
const PORT = 3000
app.use(bodyParser.urlencoded({extended: false}));

app.use(
   session({
   secret: process.env["ESSION_SECRET"],
   resave: true,
   saveUninitialized: true,
   cookie: { secure: false },
   key:'express.sid',
 }));

console.log("from console Dir Name  => ",__dirname);
console.log("from console Dat  => ",Date());
console.log("from console process.env  => ",process.env["ESSION_SECRET"]);

 
app.use(express.static(path.join(__dirname, "front", "build")))

app.get("/",(req, res )=>{  
  res.sendFile(path.join(__dirname, "front", "build", "index.html"))
  })

app.use("/api/date/:data?",(req, res, next) => {
    const parmsJson = req.params.date;
    const raw= new Date(parmsJson);
    const toNum = new Date(Number(parmsJson));
    console.log("incoming req at /api:date",req.params)
    console.log(raw)

    if(parmsJson==undefined){
      res.json({"unix":new Date().getTime(),"utc":new Date()});
      console.log("undefinde date retunr Date now")
    }

    else if (raw && toNum == "Invalid Date"  ){
      res.json({"error":"Invalid Date"});
      console.log("Date object cant prase return eroor")

    }else{
      res.json({"unix":parmsJson, "utc":toNum});
      console.log("passed  object ")
    }
});
app.listen(PORT,()=>{console.log("runing on"+`${80}`)}) // for loc dev 
//module.exports = app