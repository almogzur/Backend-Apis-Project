import React from "react"
import { useRef } from "react";
const { useState } = require("react")

export default function MetaData (){
  
      const [selectedFile, setSelectedFile] = useState("");
      
      const changeHandler = (event) => {
         setSelectedFile(event.target.files[0]);
   
      };

      const handleSubmission = async  () => {

         const formData = new FormData();

         formData.append('File', selectedFile);

         console.log("formData ", formData)

           const res =  fetch( '/api/fileanalyse',{
               method: 'POST',
               body: formData,
            })

            return  await res 

      };

   return( 
   <div className="text-center" id="metadata">

   <h1>API Project: File Metadata Microservice</h1>
    
   <form   id="metaform" action='/api/fileanalyse' method="post" enctype="multipart/form-data"
    >

    <input 
    type="file"
    name="avatar"
    onChange={changeHandler}
    accept=".pdf,.txt,jnpg,.jpg,.docx,.rtf"
    multiple
    />
   </form>

   <br/>

   <button
   onClick={handleSubmission}
   >Upload
    </button>

   </div>
   ) 
}

