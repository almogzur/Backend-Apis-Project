import React from "react";
import { useState , useEffect  } from "react";


 const Urlshot = ()=>{

    const getData = async ()=>{
      const res = await fetch('/api/shorturl/' , {
         method: 'POST', /* or 'PUT'*/
         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
         body:`url=${input}`,
         })
       const data = await res.json()
       return data
     }

const [input, setInput]= useState("")
const [json, setJson]=useState("")

useEffect(()=>{

})

const change = (e)=>{
        setInput(e.target.value)
        console.log("change fun inv")
}
const click =  (e) => {
  console.log(input,"click inv")
  getData().then((data)=>{
    console.log(data)
    if(data["short_url"]){
      window.location.href='/api/shorturl/'+data["short_url"]
    }else{
      alert(JSON.stringify(data))
    }
   
  })
  setInput("")
}
return (
   
<div className="Url" >
<h1 className="text-center">URL Shortener Microservice</h1>

     <div id="outbox">
     <h3 >URL Shortener</h3>
       <p>"Example: POST [project_url]/api/shorturl - https://www.google.com"</p>
        <div id="inbox">
          <form>
        <input
            placeholder="https://www.exmple.com"
            id="input"
            className="text-center"
            onChange={change}
            value={input} // the text value aka text 
            >
         </input>
         </form>
         <br/>
         <br/>
         <button
         type="submit"
        id="bot"
        className="btn btn-primary"
         onClick={click}
         >POST Url
         </button>
       
         </div>
         <h3>Example Usage:</h3>
         <p>[this_project_url]/api/shorturl/_id</p>
    </div>
     Mady By Almog Zur for FreeCodeCamp :)
</div>
)
}


export default Urlshot