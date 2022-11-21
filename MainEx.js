 'use strict';
require('dotenv').config();
const express = require("express");
const session = require('express-session');
const app = express(); 
const bodyParser = require("body-parser");
const Whoami= require ("./Routes/Whoami")
const TimeService= require ("./Routes/Timeservice").TimeService
const UrlShort = require('./Routes/Url').UrlShort
const Main = require("./Routes/index").main
const WorkOut = require('./Routes/WorkOut').WorkOut
const metaData= require('./Routes/metaData').metaData
const path = require("path");
const db = require('./dbConnection').main
const cors = require("cors")

const corsOptions = {
  origin: "https://www.freecodecamp.org",
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
})); // for parsing application/x-www-form-urlencoded
app.use(express.json({
  limit: '50mb'
})) // for parsing application/json
app.use(
  session({
  secret: process.env["SESSION_SECRET"],
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false },
  key:'express.sid',
}));
app.use(express.static(path.join(__dirname, "front", "build")))


/// Routes invoke ///
Main(app)
Whoami(app)
TimeService(app)
UrlShort(app,db) // CRUD calls to db
WorkOut(app) // Schema RealM db
metaData(app)
////End Route invoke
module.exports = app // for GL