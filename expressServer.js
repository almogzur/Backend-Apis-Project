'use strict';
require('dotenv').config();
const express = require("express");
const app = express(); 
const bodyParser = require("body-parser");
const session = require('express-session');
const howami= require ("./Routes/howami")
const TimeService= require ("./Routes/Timeservice")
const index = require("./Routes/index")
const path = require("path");

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

/// Routes invoke ///

index(app)
howami(app)
TimeService(app)

////End Route invoke



module.exports = app // for GL