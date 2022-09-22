
const path = require("path");
const cors = require("cors");
const corsOptions = {
  origin: "https://www.freecodecamp.org",
  optionsSuccessStatus: 200
}

 
module.exports= function UrlShort(app,db) {

   let counte = 1
     db(async (client) => {

   const db_URLS = await client.db("Urlshort").collection("urls")

    app.route("/api/urlsort/:url?", cors(corsOptions) )

    console.log(`req to "/api/urlshort/"`)

       .post((req, res) => {
                  
         const  url = req.params.url;
         let reg = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g //<=  taken forn https://regexr.com/39nr7
         let result = url.match(reg)
         ++counte 
  
          result == null ?
          res.json({ "error": 'invalid url' }) : 
          db_URLS.findOne({})

          console.log("URL short page ",counte ,"POST")


        })
   


  })
}







