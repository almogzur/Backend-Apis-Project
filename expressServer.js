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

    const raw= new Date(parmsJson);  // H strings 
    const toNum = new Date(Number(parmsJson)); // H numbers

    console.log("incoming req at /api:date",parmsJson)
    console.log(raw,toNum)
    


   
});

module.exports = app // for GL