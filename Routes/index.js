const express = require("express");
const app = express(); 
const path = require("path");

module.exports = function main(app){
app.get("/",(req,res,next)=>{
  res.sendFile(path.join(__dirname, "front", "build", "index.html"))
    next()
  })
}
console.log(module.exports,"exports from Index Route")