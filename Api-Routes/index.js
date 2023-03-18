
const path = require("path");
const loc = path.join(__dirname, "front", "build")

exports.indexPage = function indexPage(app) {

    app.get('/',(req,res,next)=>{
   
        res.sendFile( path.join(__dirname, "front", "build","index.html"));
        
    })

}