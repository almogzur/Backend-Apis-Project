const express = require("express");
const app = express(); 
const path = require("path");
const cors = require("cors")

const corsOptions = {
    origin:"https://www.freecodecamp.org",
    optionsSuccessStatus: 200
  }

function Url (app) {

  app.get("/api/shorturl/:url?",cors(corsOptions),(req,res)=>{
    const url = req.params ; 
    console.log(url)
    res.json({   "original_url" : "",    "short_url" : 1 })
  }

)}


module.exports = Url
