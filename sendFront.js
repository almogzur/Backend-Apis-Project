const path = require("path");
const loc = path.join(__dirname, "front", "build")


exports.sendFront = function sendFront(app,express){
   
    
    app.get('/home',(req,res,next)=>{
        app.use(express.static(loc))
        res.sendFile( path.join(__dirname, "front", "build","index.html"));
        
    })
}