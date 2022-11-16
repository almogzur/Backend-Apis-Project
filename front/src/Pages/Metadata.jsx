import React from "react"
const { useState } = require("react")

export default function MetaData (){

   const [state,setState] = useState("")

   const click = (e)=>{
        console.log(e)
   }


   return( 
      <div className="text-center" id="metadata">
    <h1>API Project: File Metadata Microservice</h1>
    
    <form 
    action="/api/fileanalyse" 
    method="post" 
    enctype="multipart/form-data"
    >
    <input 
    type="file"
    name="avatar"
    accept=".txt,.pdf,.docx,.jpge,.jpg,.rtf"
   /></form>
   <br/>
   <button
   onClick={click}
   >upload</button>
   
   </div>
   ) 
}

