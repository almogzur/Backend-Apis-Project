const ObjectId = require('mongodb').ObjectID;

exports.UrlShort = function UrlShort(app,db) {

db(async (callback) => { ///api/urlsort/:url?
  
  const db_URLS = await callback.db("Urlshort").collection("urls")

   app.route("/api/shorturl/:url?")

   .post((req,res,next)=>{ console.log(`POST /api/shorturl/`);  

        const url = req.body.url
        const reg = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/ // <- from https://uibakery.io/regex-library/url
        const result = url.match(reg)

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
                         short_url : url._id
                        })
                }else{
                  db_URLS.insertOne(
                        {"url":Furl},
                   function(err,doc){
                           if(err){
                               console.log(err)
                            }else{
                              console.log(doc.ops,"POST SAVE")
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
              res.send({"error":"invalid url"})
          }
           
  })

   .get((req,res,next)=>{ // need to be free for redirect call 
         const id = req.params.url

       console.log("Get at 'api/shorturl/")
         if(id){
         db_URLS.findOne({_id:ObjectId(id)},(err,data)=>{
             if(err){
            console.log(err)  }
             else if(data){
             console.log(id,"GET find ")
              res.redirect(`${data.url}`)}
            else{
            console.log("GET Eroor")
            }
            })
          }
          else{
            console.log("test",)
            res.send({a:"a"})

          }
  }) 
  
  })
}    

console.log(module.exports,"exports from UrlShort Route")

