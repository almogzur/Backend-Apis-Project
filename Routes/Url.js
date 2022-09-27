
const path = require("path");

exports.UrlShort = function UrlShort(app,db) {
   let counte = 1

   db(async (client) => { ///api/urlsort/:url?
    
     const db_URLS = await client.db("Urlshort").collection("urls")

        app.route("/api/shorturl/:url?")

       .post((req,res,next)=>{ // HTTP POST REQ Hendler to update data 
        console.log(`POST /api/shorturl/`);  ++counte ;
        let url = req.body.url
        let reg = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g //<=  taken forn https://regexr.com/39nr7
        let result = url.match(reg)
     
        db_URLS.createIndex( { num: 1 } )

        if(result!==null){
              console.log("no Null")
              db_URLS.findOne({url:result.toString()},
               (err,url)=>{
          if(err){
                 console.log(err,"find");
          }else if(url){
                       console.log(url, "from find")
                             res.json({ original_url : url.url, short_url : url._id})
          }else{
                db_URLS.insertOne(
                                 { "url":result.toString(), _id:"" },
                    (err,doc)=>{
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
  })
         
}
    
    
       
  
console.log(module.exports,"exports from Timeservice Route")