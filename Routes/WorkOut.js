const { userSchema } = require('../db.schema');

const findUser = require('../db.schema').findUser
const saveUser = require('../db.schema').saveUser
const findAllUsers = require('../db.schema').findAllUsers
const timestamp = Math.floor(new Date().getTime()/1000);
  exports.WorkOut=  async function WorkOut(app){
    
    app.route('/workout/api/:users?')

      .post(async (req,res,next)=>{
          console.log("POST /workout/api/:user?/")
          console.log(req.body)
          const inputUser = req.body.user;
          const userName = req.body.username
          
          if(inputUser){
            const dbres = findUser(inputUser).then((data)=>data)
            const user= await dbres
            console.log(dbres,"db res")
            if(user){
              res.redirect('/workout/api/'+user)
            }else{
              console.log("no user in db ")
              const dbres = saveUser(inputUser).then((data)=>data)
              const user= await dbres
                   if(user){  res.redirect('/workout/api/'+user) }
            }
            
          }else if(userName){
         
          }
          else{
            console.log("no user")
          }      
  })
      .get(async (req,res,next)=>{
         console.log("GET ,/workout/api/:user?")
         let user = req.params.users
     
         console.log(user)


  })
  app.route('/workout/api/users/:_id?')
  .post((req,res,next)=>{
    console.log("POST /workout/api/users/:_id/exercises ")

  })
   .get((req,res,next)=>{
    console.log("GET /workout/api/users/:_id/exercises ")
   })
  }

console.log(module.exports,"exports from WorkOut")


