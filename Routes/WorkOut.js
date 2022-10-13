exports.WorkOut= function WorkOut(app,User){

function createAndSave (done,userName){
  const doc = new User({Name:userName})
  doc.save(function(err,data){
    if(err){
      console.log(err)
    }else{
      return done(null,data)
    }
  })
}
function findUser(done,userName){
  User.findOne({Name:userName},function(err,data){
    if(err){
      console.log(err)
    }else{
      return done(null,data)
    }
  })
}
function findAllUsers(done){
  User.find({},function(err,data){
    if(err){
      console.log(err)
    }else{
      return done(null,data)
    }
  })
}


    app.route('/workout/api/:users?')
      .post((req,res,next)=>{
          console.log("POST /workout/api/:user?/")
          console.log(req.body)
          const inputUser = req.body.user 
          
          
          
       
  })
      .get((req,res,next)=>{
         console.log("GET ,/workout/api/:user?")
         console.log(req.body,req.parms,req.quary)
         const parms = req.parms
         const quary = req.quary
         doc.find({})
         console.log(doc)
  

  })
  
   
  }

console.log(module.exports,"exports from WorkOut")


