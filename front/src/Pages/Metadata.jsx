import React from "react"
const { useState } = require("react")

export default function MetaData (){

   async function postData () {
    const res= await fetch('/api/fileanalyse',{
       method:'POST',
       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      // body:`username=${user}`,
      })
      const json = res.json()
      return json
   }

   const [state,setState] = useState("")

   const click = (e)=>{
        console.log(e)
   }


   return( 
      <div className="text-center" id="metadata">
    <h1>API Project: File Metadata Microservice</h1>
    <form action="/api/fileanalyse" method="post" enctype="multipart/form-data">
    <input 
    type="file"
    name="avatar"
    accept=".txt,.pdf,.docx,.jpge,.jpg,.rtf"
   /> 
   <br/>
   <button
   onClick={click}
   >upload</button>
   </form>
   </div>
   ) 
}