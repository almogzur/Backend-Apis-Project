import React from "react";
import { useState } from "react";

 const Urlshot = ()=>{

const [input, setInput]= useState("")

const change = (e)=>{
    if(input){
        setInput("")
    }else{
        setInput(input + e.target.value)
    }
}
const click =  (e)=>{
   // fetch('/api/urlsort/' + input, { method: 'POST', /* or 'PUT'*/ })
        console.log(input)
    }
return (
    <div className="Url" >
        <h1>URL Shortener Microservice</h1>
        <div id="urlmainbox">
            <h3>URL</h3>
            <input
            placeholder=" www.exmple.com"
            className="text-center"
            onChange={change}
            >
            </input>
            <br/>
            <br/>
        <button onClick={click}>POST Url</button>
        </div>
         
        <h3>Short URL Creation</h3>
    </div>
)

}


export default Urlshot