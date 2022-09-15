'use strict';
const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 
const session = require('express-session');
const cookieParser= require('cookie-parser');
const cors = require("cors")
const path = require("path");
const subdomain = require('express-subdomain');
const TimeServer = require("./TimeServer")
const Howamiserver = require("./HowAmIServer")
const ER = "Invalid Date"
const corsOptions = {
  origin:"https://www.freecodecamp.org",
  optionsSuccessStatus: 200
}

 require('dotenv').config();
 
 app.timeservice = express.Router()
 app.howami = express.Router()

 app.use(bodyParser.urlencoded({extended: false}));

 app.use(
  session({
  secret: process.env["ESSION_SECRET"],
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
  key:'express.sid',
}));

app.timeservice.use(express.static(path.join(__dirname, "front", "build")))
  
TimeServer



module.exports = app // for GL