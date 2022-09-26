
const express = require("express");

module.exports =  function Whoami (app){ 

app.get("/api/whoami",(req,res)=>{
  
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