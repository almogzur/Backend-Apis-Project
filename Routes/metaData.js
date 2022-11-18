const multer = require ('multer')

const upload = multer({ dest: 'uploads/' })

 async function metaData (app){


app.route('/api/fileanalyse',upload.any('file'))

.post((req,res)=>{
   const file = req.file
   const body= req.body
    console.log("Post /api/fileanalyse",file,body)
    
})

console.log(exports,"backend metadata")
}

exports.metaData=metaData

