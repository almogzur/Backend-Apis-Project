
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
        const par = req.params
        const  url = req.params.url;
        console.log(par)
        let reg = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g //<=  taken forn https://regexr.com/39nr7
        let result = url.match(reg)
        
        result ? 
        db_URLS.findOne({url:result.toString()},function(err,url){

          if(err){
          console.log(err,"find");
          next(err);
          }else if(url){

           console.log(url, "from find")
          }else{
          db_URLS.insertOne(
                  { "url":result.toString(),"num":counte }),
           function(err,doc){
             if(err){
              console.log(err)
             }else{
              console.log(doc,"from insert one")
              next(null,doc)
            }
          }}
         }): res.json({ "error": 'invalid url' })

        })
      
  
       .get(cors(corsOptions),function(req,res){ // retrive data from db 

        const url = req.params.url;

        console.log("GET  //api/urlsort/:url? ")

        console.log(db_URLS)

        db_URLS.findOne({url:url} , function(err,url){
          if(err)
          console.log(err, "from Get find one")
          else if(url)
          console.log(url ,"from Get find one")
        })
      })
  })
         
}
    
    
       
      

console.log(module.exports,"exports from Timeservice Route")