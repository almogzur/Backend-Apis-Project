'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 
const session = require('express-session');
const cookieParser= require('cookie-parser');
const path = require("path");
const subdomain = require('express-subdomain');
const TimeService = require("./Servers/TimeService")
const Howamiserver = require("./Servers/HowAmIServer")

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

app.get("/",(req,res,next)=>{
  res.sendFile(__dirname,"front","build","index.html")
  console.log(TimeService)
})

app.use(express.static(path.join(__dirname, "front", "build")))


//app.use(subdomain("howami",))
//app.use(subdomain("timeservice",))

module.exports = app // for GL