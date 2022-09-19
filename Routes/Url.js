const express = require("express");
const path = require("path");
const cors = require("cors")
const corsOptions = {
  origin: "https://www.freecodecamp.org",
  optionsSuccessStatus: 200
}

const Url = require('../DB').UrlModole
const createUrl = require('../DB').createAndSaveUrl
const findUrl = require('../DB').findUrlById



function Url(app,DB) {


  app.get("/api/shorturl/:url?", cors(corsOptions), (req, res) => {

    const url = req.params.url;

    let reg = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g //<=  taken forn https://regexr.com/39nr7
    
    let result = url.match(reg)

    console.log(result)

    result == null ? 
      res.json({ "original_url": "", "short_url": 1 }) :
      res.json({ "original_url":result.toString(),"short_url":0  })

  }

  )

  app.post("/api/test",(req,res)=>{

    console.log(createUrl, typeof createUrl)
  })
}


module.exports = Url
