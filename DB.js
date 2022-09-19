
  require('dotenv').config();
 const mongoose = require('mongoose');
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
       
module.exports = UrlModle
module.exports = createAndSaveUrl 
module.exports = findUrlById