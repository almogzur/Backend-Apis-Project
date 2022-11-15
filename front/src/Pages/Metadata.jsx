import React from "react"
const { useState } = require("react")

export default function MetaData (){

   const [state,setState] = useState("")

   const click = (e)=>{
        console.log(e)
   }


   return(
<div id="metadata">
    <h1>API Project: File Metadata Microservice</h1>
    <div id="metabox">
     <textarea
     disabled
     placeholder="File Name"
     /> 
    <button onClick={click} >Upload</button>
    </div>
   
</div>
   ) 
}