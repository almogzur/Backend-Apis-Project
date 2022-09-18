
const express = require("express");
const app = express(); 
const path = require("path");

module.exports =  function howami (app){ 


app.get("/api/howami",(req,res)=>{
    console.log(req)
})
}