const path = require("path");
const loc = path.join(__dirname, "front", "build")

exports.sendFront = function sendFront(app){
    app.get('/home',(req,res)=>{
        res.sendFile(loc)
    })
}