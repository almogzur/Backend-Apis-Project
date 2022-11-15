import React from "react"
const { useState } = require("react")
const JSONPretty = require('react-json-pretty');

//////// Main Componenet ////////

export default function WorkOut () { // nexted component {WorkOutForm}

const [user, setUser]= useState("")
const [err,setErr]=useState("")
const[json,setJson]=useState("")

async function postUserData (){
    const res  =  await fetch('/workout/api/',{
       method:'POST',
       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
       body:`username=${user}`,
        })
    const json =  res.json()
           return json
}
//  Componenet  //////
const change = (e)=>{
    setUser(e.target.value)
}
const click = async ()=>{
    if(user.length>=3&& user.length<25){
     postUserData().then((data)=>{
         console.log(data)
         setJson(data)
    })

    }else{
        window.alert("User Name Must Have 3 Charecters ")
    }
}
////// end Componenet functions /////
if(json){
   let root = document.body
    root =  <JSONPretty id="json-pretty" className="text-center" data={json}></JSONPretty>
   return root 
    }
else{
    return (
        <div id="work">
            <h1>Exercise Tracker</h1>
            <div id="work-form">
             <input 
                id="user"
                placeholder="User"
                type="text"
                value={user}
                onChange={change}
                required
              />
                 <br/>
               <button
               className="btn btn-info"
               id="user-btn"
                onClick={click}
                >Regester/Find User
              </button>
            </div>
            <WorkOutForm />
           
        </div>
        
    )
}

}
/////////////// end main Componenet /////

///////// Form Component ////////////////////////

const WorkOutForm = ()=> {
    ///////// State /////////////
const [id , setId]=useState("")
const [description, setDescription]= useState("")
const [duration , setDuration]=useState("")
const [date, setDate]= useState("")
const [json,setJson]=useState("")
///////// End Of State /////////////


//////  fatch functions /////
async function postLogs () {
    const res = await fetch('/workout/api/users/' + id +'/exercises',{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: 
            JSON.stringify({
            "description":description,
            "duration":duration,
            "date":date,
            })
            })
        const json =  res.json()
        return json 
    }
////// end fatch functions /////
//////////// Component Fucntions //////////

const idchange = (e)=>{
     setId(e.target.value)
}
const decchange= (e)=>{
    setDescription(e.target.value)
}
const durchange = (e)=>{
    setDuration(e.target.value)
}
const datchange= (e)=>{
    setDate(e.target.value)

}
const click =async (e)=>{
    console.log(id.length)
    if(id.length>=3){
        await postLogs().then((data)=>{
       console.log(data)
       setJson(data)
    })
    setId("")
    setDate("")
    setDescription("")
    setDuration("")
    }else {
    window.alert(" ID is Required And Need To be At list 3 Carecters")
    }
    
}
//////////////End Of Functions /////////////////
 if(json){
      document.getElementById("work-form").style.visibility= "hidden"
     return( <div className="text-center"> {<JSONPretty id="json-pretty" data={json}></JSONPretty>} </div> )
 }
 else{return(
    <div id="filds">

        <form>
            <input
            placeholder="ID"
            value={id}
            onChange={idchange}
            required
            >
            
            </input>
            <br/>

            <input
            placeholder="Description"
            value={description}
            onChange={decchange}
            required
            >
            </input>
            <br/>

            <input
            type="number"
            placeholder="Duration"
            value={duration}
            onChange={durchange}
        
            >
            </input>
            <br/>
            
            <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={datchange}
            >
            </input>
            <br/>
        </form>

        <button
        onClick={click}
        className="btn btn-info"
        >Update User</button>
         <p className="text-center">
                <strong>GET</strong> user's exercise log: GET /api/users/:_id/logs?[from][&to][&limit]<br/>
                []=optional<br/>
                from, to = dates (yyyy-mm-dd); limit = number<br/>
              </p>
    </div>
)}

}
//////////////////// End  Form Component ///////////
