
exports.UrlShort = function UrlShort(app,db) {

   db(async (callback) => { ///api/urlsort/:url?
    
     const db_URLS = await callback.db("Urlshort").collection("urls")


        app.route("/api/shorturl/:url?")

       .post((req,res,next)=>{ // HTTP POST REQ Hendler to update data 

        console.log(`POST /api/shorturl/`);  ;

        let url = req.body.url
        let reg = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g //<=  taken forn https://regexr.com/39nr7
        let result = url.match(reg)
        
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
                                 { "url":result.toString()},
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
        .get((req,res,next)=>{
         const Rurl = req.params.url
          
         db_URLS.findOne({_id:Rurl},function(err,url){
          if(!err){
            console.log(url)
          }
         })

          if(!Rurl){
            //db_URLS.findOne({})
            res.json({"blbl":"blbla"})
         }else{
          res.json({"ble":"ble"})
         }
        })
  })
         
}
    
    
       
  
console.log(module.exports,"exports from Timeservice Route")