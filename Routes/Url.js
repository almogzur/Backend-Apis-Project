
const path = require("path");
const cors = require("cors")
const corsOptions = {
  origin: "https://www.freecodecamp.org",
  optionsSuccessStatus: 200
}
 
let parmsForExports ;

function UrlShort(app) {

const URL = require('../DB').UrlModole
const createUrl = require('../DB').createAndSaveUrl
const findUrl = require('../DB').findUrlById

  app.get("/api/shorturl/:url?", cors(corsOptions), (req, res) => {

    const  url = req.params;

    let reg = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g //<=  taken forn https://regexr.com/39nr7
    
    let result = url.match(reg)
    
    console.log(`from raout parms => ${req.params}`)

    result == null ? 
      res.json({ "original_url": "", "short_url": 1 }) :
      res.json({ "original_url":result.toString(),"short_url":0  })

   
  })

  app.get("/api/:test?",(req,res)=>{

    const url = req.params;

    parmsForExports += url 

    console.log(url.test)
    exports.url = url 
    createUrl(function (err,data){

     console.log(data," Ex invoking DV ")

     

    })


    console.log("Express")

  
  })

}

exports.parmsForExports = parmsForExports? parmsForExports: null
exports.UrlShort= UrlShort

console.log(module.exports)



