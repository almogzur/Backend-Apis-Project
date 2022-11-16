const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
exports.metaData = function metaData (app){


app.route('/api/fileanalyse',upload.single('avatar'))

.post((req,res)=>{
   const file = req.file
   const body= req.body
    console.log("Post /api/fileanalyse",file,body)
    
})




    


console.log(exports,"backend metadata")
}