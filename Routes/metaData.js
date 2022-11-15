const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

exports.MetaData= async function (app){

app.route('/api/fileanalyse')

app.post(upload.single(),(req,res)=>{console.log("POST at /api/fileanalyse ")

})


}