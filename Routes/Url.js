
const path = require("path");
const cors = require("cors");
const corsOptions = {
  origin: "https://www.freecodecamp.org",
  optionsSuccessStatus: 200
}

exports.UrlShort = function UrlShort(app,db) {
   let counte = 1

   db(async (client) => { ///api/urlsort/:url?
     const db_URLS = await client.db("Urlshort").collection("urls")

        app.route("/api/urlsort/:url?")

       .post(cors(corsOptions),(req,res,next)=>{ // HTTP POST REQ Hendler to update data 

        console.log(`req to "/api/urlshort/" Hendler POST  `);  ++counte ;

        const  url = req.params.url;
        let reg = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g //<=  taken forn https://regexr.com/39nr7
        let result = url.match(reg)

        console.log(result)

        result ? 
        db_URLS.findOne({url:result.toString()},function(err,url){
          if(err){
          console.log(err);
          next(err);
          }else if(url){
           console.log(url)
          res.redirect('/')
          }else{
          db_URLS.insertOne({ "url":result }),function(err,doc){
            if(err){
              return console.log(err)
            }else{
              console.log(doc)
              next(null,doc)
            }
            }
          }
        }):null

        })
      
  
       .get(cors(corsOptions),function(res,req){ // retrive data from db 
        console.log("get")


      })

      
  })
         
}
    
    
       
      

    