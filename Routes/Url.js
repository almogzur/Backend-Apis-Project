const ObjectId = require('mongodb').ObjectID;
exports.UrlShort = function UrlShort(app,db) {
   db(async (callback) => { ///api/urlsort/:url?
  
  const db_URLS = await callback.db("Urlshort").collection("urls")

   app.route("/api/shorturl/:url?")

   .post((req,res,next)=>{ // HTTP POST REQ Hendler to update data 
        console.log(`POST /api/shorturl/`);  
        const url = req.body.url
        let reg = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g //<=  taken forn https://regexr.com/39nr7
        let result = url.match(reg)

        if(result!==null){
          const Furl = result.toString()
              console.log("VALID URL" ,Furl)
              console.log("Serching DB")
              db_URLS.findOne({url:Furl},
               (err,url)=>{
                if(err){
                  console.log(err)
                }
                  else if(url){
                       console.log(url, "POST FIND")
                       res.send({
                         original_url : url.url, 
                         short_url : url._id})
                          }else{
                db_URLS.insertOne(
                                 { "url":Furl},
                    (err,doc)=>{
                                   if(err){
                                           console.log(err)
                                    }else{
                                         console.log(doc,"POST SAVE")
                                         console.log("Saving Url")
                                         next(null,doc)
                                         res.send({
                                         original_url :Furl,
                                         short_url :doc.insertedId
                                        })
            }
          })}
         })} 
          else{
              console.log(" Invalid URL ")
              res.json({"error":"invalid url"})
          }
           
        })

   /*.get((req,res,next)=>{ // need to be free for redirect call 
         const id = req.params.url
         console.log("Get at 'api/shorturl/",id)
         db_URLS.findOne({_id:ObjectId(id)},function(err,data){
          if(err){
            console.log(err)
          }else if(data){
            console.log(id,"GET find ")
            res.json({original_url:data.url,short_url:id})
          }else{
            console.log("GET Else")
          }
         })
           }) */ 
  })
         
}
    
    
       
  
console.log(module.exports,"exports from Timeservice Route")