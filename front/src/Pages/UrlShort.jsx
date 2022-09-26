import React from "react";
import { useState } from "react";

 const Urlshot = ()=>{

const [input, setInput]= useState("")

const change = (e)=>{
        setInput(e.target.value)
}
const click =  (e)=>{
    console.log(input)
   fetch('/api/urlsort/' + input, { method: 'POST', /* or 'PUT'*/ })
    setInput("")

    }
return (
    <div id="outerbox">
    <div className="Url" >
        <h1>URL Shortener Microservice</h1>
        <div id="urlmainbox">
            <h3>URL</h3>
            <input
            placeholder=" www.exmple.com"
            className="text-center"
            onChange={change}
            value={input} // the text value aka text 
            >
            </input>
            <br/>
            <br/>
        <button onClick={click}>POST Url</button>
        </div>
         
        <h3>Short URL Creation</h3>
    </div>
    </div>
)

}


export default Urlshot