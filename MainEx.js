'use strict';
require('dotenv').config();
const express = require("express");
const app = express(); 
const bodyParser = require("body-parser");
const session = require('express-session');
const Whoami= require ("./Routes/Whoami")
const TimeService= require ("./Routes/Timeservice")
const UrlShort = require('./Routes/Url')
const index = require("./Routes/index")
const path = require("path");
const db = require('./DB');
const mongoose = require('mongoose');

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
index(app,db)
Whoami(app,db)
TimeService(db)
UrlShort(app,db)

////End Route invoke



module.exports = app // for GL