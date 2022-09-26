
const path = require("path");

exports.UrlShort = function UrlShort(app,db) {
   let counte = 1

   db(async (client) => { ///api/urlsort/:url?
    
     const db_URLS = await client.db("Urlshort").collection("urls")

        app.route("/api/shorturl/:url?")

       .post(cors(corsOptions),(req,res,next)=>{ // HTTP POST REQ Hendler to update data 
        console.log(req.params)
        console.log(`POST "/api/shorturl/" counte `);  ++counte ;
        const  url = req.params.url;
        let reg = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g //<=  taken forn https://regexr.com/39nr7
        let result = url.match(reg)
 
        
        if(result!==null){
          console.log("no Null")
        db_URLS.findOne({url:result.toString()},function(err,url){
          if(err){
          console.log(err,"find");
          }else if(url){

           console.log(url, "from find")

           res.json({"url":url.url})

          }else{
          db_URLS.insertOne(
                  { "url":result.toString(),"num":counte },
           function(err,doc){
             if(err){
              console.log(err)
             }else{
              console.log(doc,"from insert one")
              next(null,doc)
            
            }
          })}
         })} 
          else{
            console.log("err bad URL ")
            res.json({"error":"invalid url"})
          }
        })
      
  
       .get(function(req,res){ // retrive data from db 
        const url = req.params.url;
        console.log("GET  //api/shorturl/:url? ")

        db_URLS.findOne({url:url} , function(err,url){
          if(err)
          console.log(err, "from Get find one")
          else if(url)
          console.log(url ,"from Get find one")
          res.json({"url":url.url})
        })
      })
  })
         
}
    
    
       
      

console.log(module.exports,"exports from Timeservice Route")