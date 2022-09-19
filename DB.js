

  require('dotenv').config();

  let mongoose ; try { mongoose = require("mongoose");}catch(e){console.log(e)}

  const URI = process.env["MONGO"]

 mongoose.connect(URI,{ 
        useNewUrlParser: true,
        //useFindAndModify: false ,
        //useUnifiedTopology: true 
    });



const UrlSchma = new mongoose.Schema({
    Url : String,
   });
  
   
const UrlModle = mongoose.model('Url', UrlSchma);
   
function createAndSaveUrl(done,url){
 
    const doc = new UrlModle( url );

      doc.save(function(err, data) {

        if (err) return console.error(err);

        return done(null, data);
      })
      // mongoos auto creat id for evry instence 1
}

const findUrlById = (URIId, done) => {

    Person.findById(URIId, (err, data) => {

      if (err) return console.error(err)

      return done(null, data)
    })
  };
let conectionSataus  = mongoose.connection.readyState

if (mongoose ){
    console.log(mongoose)
}


module.exports = UrlModle
module.exports = createAndSaveUrl 
module.exports = findUrlById
