
exports.apiroot = function apiroot (app){

    app.route('/')
    .get((req,res,next)=>{
        console.log('get "/"')
res.send(

   `<form   id="metaform" action='/api/fileanalyse' method="post" enctype="multipart/form-data">

   <input type="file"name="upfile" accept=".pdf,.txt,jnpg,.jpg,.docx,.rtf" multiple />

   <input type="submit" value="Uplopad" />
  </form>`
)
         
       
    })

}