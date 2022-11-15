const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

exports.MetaData= async function MetaData (app){

app.route('/api/fileanalyse')

.post(upload.single('avatar'),(res,req)=>{
    console.log("Post /api/fileanalyse")
    console.log(req.body)
})


}