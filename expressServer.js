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

console.log("from console Dir Name  => ",__dirname);
console.log("from console Dat  => ",Date());
console.log("from console process.env  => ",process.env["ESSION_SECRET"]);

 
app.use(express.static(path.join(__dirname, "front", "build")))

app.get("/",(req, res )=>{  
  res.sendFile(path.join(__dirname, "front", "build", "index.html"))
  })

app.use("/api/:data?",(req, res, next) => {

    const parmsJson = req.params.data

    const s = new Date(parmsJson);  // string
    const n = new Date(Number(parmsJson)); // number 

    console.log("incoming req at /api:date",parmsJson)
    console.log(s,n,parmsJson)

    if(s && n == ER ){
       res.json({ "error" : ER })
    }else if( parmsJson == undefined){
      res.json({"unix":new Date().getDate(),"utf":new Date()})
    }
  }
)


module.exports = app // for GL