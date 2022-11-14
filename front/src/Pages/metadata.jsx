import React from "react"
const { useState } = require("react")

export default function MetaData (){

   const [state,setState] = useState("")

   const click = (e)=>{
        console.log(e)
   }


   return(
<div id="metadata">
    <h1>MetaData</h1>
    <button onClick={click} ></button>
</div>
   ) 
}