
exports.metaData = function metaData (app,upload){


app.route('/api/fileanalyse',upload.single('avatar'))

.post((req,res)=>{
   const file = req.file
   const body= req.body
    console.log("Post /api/fileanalyse",file)
    
})




    


console.log(exports,"backend metadata")
}