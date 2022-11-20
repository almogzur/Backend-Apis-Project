const multer = require ('multer')

const reactfile = multer({ dest: 'uploads/'}).single("upfile")


function metaData (app){

app.post('/api/fileanalyse',reactfile,(req,res)=>{console.log("POST",req.path)
   const file = req.file

   const resJson= {
    "size":file.size,
    "name":file.originalname,
    "type":file.mimetype,
    
 }
 console.log("Sending Json",resJson)

    res.json(resJson)
})

app.get('/api/fileanalyse',(req,res)=>{
    console.log("Get")
})


 }

 
exports.metaData=metaData

