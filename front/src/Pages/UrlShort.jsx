import React from "react";
import { useState } from "react";

 const Urlshot = ()=>{

const [state, setState]= useState({"input" : "" })

const click =  (e)=>{

fetch('/api/urlsort/' +this.state.input, { method: 'POST', /* or 'PUT'*/ })
    console.log(state.input)
}
const change = (e)=>{
    setState(input = e.target.value)

}
return (
    <div className="Url" >
        <h1>URL Shortener Microservice</h1>
        <div id="urlmainbox">
            <h3>URL</h3>
            <input
            placeholder=" www.exmple.com"
            className="text-center"
            value={state.input}
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