
exports.TimeService = function TimeService(app){

  const ER = "Invalid Date"

  app.get("/TimeService/api/:data?",(req, res, next) => {  
      function addZero(i) {if (i < 10){i = "0" + i} return i; }
      const SRparms = req.params.data ;  // SR parms 
      const daysarr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
      const monthsarr= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",]
      const testNum = Number(SRparms) // to chack parms is number in unix format 
      const testprash = new Date(Date.parse(SRparms))
  
     if(SRparms == undefined){
        console.log("from undefined")
        const def = new Date() ; // defult 
        const s = addZero(def.getSeconds());
        const h = addZero(def.getHours());
        const m = addZero(def.getMinutes());
        const day =def.getDay()
        const date =def.getDate()
        const month = def.getMonth()
        const year= def.getFullYear()
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
}

console.log(module.exports,"exports from Timeservice Route")