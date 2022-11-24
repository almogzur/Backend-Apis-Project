
exports.apiroot = function apiroot (app){

    app.route('/')
    .get((req,res,next)=>{
        console.log('get "/"')
    })

}