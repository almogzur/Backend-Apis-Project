const multer = require ('multer')

const upload = multer({ dest: 'uploads/' })

const type = upload.single('avatar')

 async function metaData (app){

app.post('/api/fileanalyse',type,(req,res)=>{
   const file = req.file
   const body= req.body
    console.log("Post /api/fileanalyse",file,body)
    
})

console.log(exports,"backend metadata")
}

exports.metaData=metaData

