const express = require("express");
const app = express(); 
const path = require("path");

module.exports = function main(app){
app.get("/",(req,res,next)=>{
    res.json({"almog":"almog"})
    next()
  })
}