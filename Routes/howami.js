
const express = require("express");
const app = express(); 
const path = require("path");

module.exports =  function howami (app){ 

app.get("/howami",(res,req,next)=>{console.log("howami")})

app.get("/howami/api",(req,res)=>{})
}