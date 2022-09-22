
const path = require("path");
const cors = require("cors")
const corsOptions = {
  origin: "https://www.freecodecamp.org",
  optionsSuccessStatus: 200
}
 
function UrlShort(app,db) {

  db(async client => {

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


    function createAndSaveUrl(done,url){

      console.log(url,"from db")
     
        const doc = new UrlModle({Url:url});
    
          doc.save(function(err, data) {
    
            if (err) return console.error(err);
    
            return done(null, data);
          })
          // mongoos auto creat id for evry instence 1
    }
    
    const findUrlById = (done) => {
    
      UrlModle.findById((err, data) => {
    
          if (err) return console.error(err)
    
          return done(null, data)
        })
      };

    

  

    console.log("Express")

  
  })

  })

}

console.log(module.exports,"exports")

exports.UrlShort= UrlShort




