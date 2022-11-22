import React from "react"
const { useState ,useEffect} = require("react")


export default function MetaData (){
  
   const [selectedFile, setSelectedFile] = useState("");

   const changeHandler = (event) => {
         setSelectedFile(event.target.files[0]);
         console.log("onclicksetfile ", selectedFile)
   
      };
      /// me loding the Doc to see the result of the test 
      useEffect(()=>{
         const assert = async () => {
            const site = await fetch('https://travelgame.club/');
            const data = await site.text();
            const doc = new DOMParser().parseFromString(data, 'text/html');
           // assert(doc.querySelector('input[name="upfile"]'));
            return doc
         }
         assert().then((data)=>{
            console.log(data)
         })
      })
      /////////////////////////////////////
    

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
    <input 
    type="submit"
    value="Uplopad"
    />
   </form>
   <br/>
   </div>
   ) 
}

