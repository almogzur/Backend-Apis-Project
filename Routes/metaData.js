

exports.metaData= async function metaData (app,upload,fs){


app.route('/api/fileanalyse')


.post(upload.single('avatar'),(req,res)=>{
    console.log("Post /api/fileanalyse")
    const files = req.files
    const body = req.body
})




    


console.log(exports,"backend metadata")
}