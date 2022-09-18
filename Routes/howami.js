
const express = require("express");
const app = express(); 
const path = require("path");
const cors = require("cors")

const corsOptions = {
    origin:"https://www.freecodecamp.org",
    optionsSuccessStatus: 200
  }


module.exports =  function howami (app){ 


app.get("/api/howami",cors(corsOptions),(req,res)=>{
 const ipH1 = req.headers['x-real-ip']
 const ipH2 = req.connection.remoteAddress;
 console.log()


    res.json({
        "ipaddress": ipH1? ipH1 : ipH2,
        "language":req.headers['accept-language'],
        "software":req.headers['user-agent']
    })
})
}