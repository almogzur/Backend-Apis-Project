
const express = require("express");
const cors = require("cors")


const corsOptions = {
    origin:"https://www.freecodecamp.org",
    optionsSuccessStatus: 200
  }

module.exports =  function Whoami (app){ 

app.get("/api/whoami",cors(corsOptions),(req,res)=>{
  
 const ipH1 = req.headers['x-real-ip']
 const ipH2 = req.connection.remoteAddress;

    res.json({
        "ipaddress": ipH1? ipH1 : ipH2,
        "language":req.headers['accept-language'],
        "software":req.headers['user-agent']
    })
})
}
console.log(module.exports,"exports from Whoami Route")