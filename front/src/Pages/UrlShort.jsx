import React from "react";
import { useState } from "react";

 const Urlshot = ()=>{
const [state, setstate]= useState({})
return (
    <div className="Url" >
        <h1>URL Shortener Microservice</h1>
        <div id="urlmainbox">
            <h3>URL</h3>
            <input
            placeholder=" www.exmple.com"
            className="text-center"
            >

            </input>
            <br/>
            <br/>
        <button>POST Url</button>
        </div>
         
        <h3>Short URL Creation</h3>
    </div>
)

}


export default Urlshot