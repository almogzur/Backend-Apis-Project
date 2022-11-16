import React from "react"
const { useState } = require("react")

export default function MetaData (){

   const [file,setFile] = useState("")


   return( 
   <div className="text-center" id="metadata">

   <h1>API Project: File Metadata Microservice</h1>
    
   <form 
    id="metaform"
    action='/api/fileanalyse'
    method="post" 
    enctype="multipart/form-data"
    >

    <input 
    type="file"
    name="avatar"
    accept=".txt,.pdf,.docx,.jpge,.jpg,.rtf"

    />
    <input
    type="submit"
    value="Upload"
    />

   </form>
   <br/>

   
   </div>
   ) 
}

