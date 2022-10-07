'use strict';
require('dotenv').config();
const express = require("express");
const app = express(); 
const bodyParser = require("body-parser");
const session = require('express-session');
const Whoami= require ("./Routes/Whoami")
const TimeService= require ("./Routes/Timeservice").TimeService
const UrlShort = require('./Routes/Url').UrlShort
const index = require("./Routes/index")
const WorkOut = require('./Routes/WorkOut').WorkOut
const path = require("path");
const db = require('./dbConnection').main
const ObjectId = require('mongodb').ObjectID;
const cors = require("cors");
const corsOptions = {
  origin: "https://www.freecodecamp.org",
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

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
Whoami(app)
TimeService(app)
UrlShort(app,db)
WorkOut(app,db)

////End Route invoke


module.exports = app // for GL