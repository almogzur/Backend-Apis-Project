'use strict';
const express = require("express");
const app = express()
const cors = require("cors")
const ER = "Invalid Date"

const corsOptions = {
  origin:"https://www.freecodecamp.org",
  optionsSuccessStatus: 200
}


 timeservice.get("/",(req,res )=>{  
    res.sendFile(path.join(__dirname, "front", "build", "index.html"))
    })
  
 timeservice.use("/api/:data?",cors(corsOptions),(req, res, next) => {  
      function addZero(i) {if (i < 10){i = "0" + i} return i; }
      const SRparms = req.params.data ;  // SR parms 
      const daysarr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
      const monthsarr= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",]
      const testNum = Number(SRparms) // to chack parms is number in unix format 
      const testprash = new Date(Date.parse(SRparms))
  
      if(SRparms == undefined){
        console.log("from undefined")
        const def = new Date() ; // defult 
        let s = addZero(def.getSeconds());
        let h = addZero(def.getHours());
        let m = addZero(def.getMinutes());
        let day =def.getDay()
        let date =def.getDate()
        let month = def.getMonth()
        let year= def.getFullYear()
      res.json({
      "unix":def.getTime(),
      "utc":`${daysarr[day]}, ${date} ${monthsarr[month]} ${year} ${h}:${m}:${s} GMT`})
    } 
     else if(testNum){ // if the passed parms are can be converted to number the this invoke
      const time = new Date(testNum)
      console.log(SRparms, "from unix ")
      let H= addZero(time.getHours())
      let M= addZero(time.getMinutes())
      let S= addZero(time.getSeconds())
      let day =time.getDay()
      let date =time.getDate()
      let month = time.getMonth()
      let year= time.getFullYear()
      res.json({"unix":testNum,"utc":`${daysarr[day]}, ${date} ${monthsarr[month]} ${year} ${H}:${M}:${S} GMT`})
    }
     else if(testprash != ER){ 
      console.log(SRparms , "from string prash ")
      const time = testprash
      let s = addZero(time.getSeconds());
      let h = addZero(time.getHours());
      let m = addZero(time.getMinutes());
      let day = time.getDay()
      let date = addZero(time.getDate())
      let month = time.getMonth()
      let year= time.getFullYear()
      res.json({"unix":time.getTime(),"utc":`${daysarr[day]}, ${date} ${monthsarr[month]} ${year} ${h}:${m}:${s} GMT`})
     } 
     else{
      res.json({"error":ER})
     }
    }
  )
