 'use strict';
require('dotenv').config();
const express = require("express");
const session = require('express-session');
const app = express(); 
const bodyParser = require("body-parser");
const db = require('./dbConnection').main
const cors = require("cors")
const path = require("path");
const loc = path.join(__dirname, "front", "build")


//Api modles
const apiroot = require('./Api-Routes/root').apiroot
const sendFront= require('./sendFront').sendFront
const Whoami= require ("./Api-Routes/Whoami")
const TimeService= require ("./Api-Routes/Timeservice").TimeService
const UrlShort = require('./Api-Routes/Url').UrlShort
const WorkOut = require('./Api-Routes/WorkOut').WorkOut
const MetaData= require('./Api-Routes/metaData').metaData
//

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



/// Routes invoke ///
apiroot(app)
Whoami(app)
sendFront(app,express)// home
TimeService(app)
UrlShort(app,db) // CRUD calls to db
WorkOut(app) // Schema RealM db
MetaData(app)
////End Route invoke
module.exports = app // for GL