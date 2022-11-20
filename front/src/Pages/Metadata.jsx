import React from "react"
const { useState } = require("react")

export default function MetaData (){
  
   const [selectedFile, setSelectedFile] = useState("");
      
   const changeHandler = (event) => {

         setSelectedFile(event.target.files[0]);
         console.log("onclicksetfile ", selectedFile)
   
      };
         document.addEventListener(()=>{
            
         })
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
    name="upfile"
    onChange={changeHandler}
    accept=".pdf,.txt,jnpg,.jpg,.docx,.rtf"
    multiple
    />

    <input type="submit" value="Uplopad"/>
   </form>

   <br/>


   </div>
   ) 
}

