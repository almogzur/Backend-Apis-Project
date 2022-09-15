'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 
const session = require('express-session');
const cookieParser= require('cookie-parser');
const path = require("path");
const subdomain = require('express-subdomain');
const TimeServer = require("./Servers/TimeServer")
const Howamiserver = require("./Servers/HowAmIServer")

 require('dotenv').config();
 
 app.use(subdomain("howami",app.howami))

 app.use(bodyParser.urlencoded({extended: false}));

 app.use(
  session({
  secret: process.env["ESSION_SECRET"],
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
  key:'express.sid',
}));

app.use(express.static(path.join(__dirname, "front", "build")))
  
TimeServer(app)



module.exports = app // for GL