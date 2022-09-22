
const path = require("path");
const cors = require("cors")
const corsOptions = {
  origin: "https://www.freecodecamp.org",
  optionsSuccessStatus: 200
}
 
function UrlShort(app,db) {

  let counte = 0 

  db(async (client) => {
   const db_URLS = await client.db("Urlshort").collection("urls")

  app.get("/api/urlshort/:url?", cors(corsOptions), (req, res) => {

    const  url = req.params.url;
    let reg = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g //<=  taken forn https://regexr.com/39nr7
    let result = url.match(reg)
    
    console.log(`req to "/api/urlshort/" Route Params => ${req.params.url} `)
    ++counte 
    
    result == null ? 
      res.json({ "original_url": "", "short_url": 1 }) :

      res.json({ "original_url":result.toString(),"short_url":0  }

       , db_URLS.insertOne(
        { url: result },
        (err,data)=>{
          if(!data)err
        if(err)console.log(err)
       })
    )
      
  
 
  })



    const findUrlById = (done) => {
    
      db_URLS.findById((err, data) => {
    
          if (err) return console.error(err)
    
          return done(null, data)
        })
      };

    console.log("URL short page ",counte)

  })

}

exports.UrlShort= UrlShort

console.log(module.exports,"exports from Urlshort Route")



