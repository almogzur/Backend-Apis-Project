exports.main =  function main (app){

app.route("/")

.get((req,res)=>{
  console.log("somting")
})

}
console.log(module.exports,"exports from Index Route")

