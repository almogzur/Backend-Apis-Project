const path = require("path");

exports.sendHtml = function sendHtml (app){

app.route('/home')
  .get((req,res)=>{
        res.sendFile(path.join(__dirname, "front", "build", "index.html"))
    })



}