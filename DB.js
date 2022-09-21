
require('dotenv').config();

let mongoose ; try { mongoose = require("mongoose");}catch(e){console.log(e)}

const url = require('./Routes/Url').parmsForExport

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
   
 function createAndSaveUrl(done){

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

  let conectionSataus  = mongoose.connection.readyState

   setTimeout(()=>{

    if (mongoose ){
      console.log(conectionSataus,"<=readyState")
  }

  },10000)
  
  exports.findUrlById = findUrlById
  exports.createAndSaveUrl = createAndSaveUrl
  exports.UrlModle = UrlModle



