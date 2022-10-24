import React from "react"
const { useState } = require("react")

//////// Main Componenet ////////
export default function WorkOut () { // nexted component {WorkOutForm}

 //////// state ///////////
const [user, setUser]= useState("")
/////// end state ////////
//////  fatch functions /////
const postUserData = async ()=>{
    const res  = fetch('/workout/api/',{
       method:'POST',
       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
       body:`username=${user}`,
        })
    const data = await res
           return data
    }
// end fatch functions ////

//  Componenet functions ///////////
const change = (e)=>{
    setUser(e.target.value)
}
const click = async ()=>{
    if(user.length>=3&& user.length<25){
     postUserData().then((data)=>{ console.log(data)  })
    setUser("")
    }else{
        window.alert("User Name Must Have 3 Charecters ")
    }
}
////// end Componenet functions /////
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
/////////////// end main Componenet /////

///////// Form Component ////////////////////////

const WorkOutForm = ()=> {
    ///////// State /////////////
const [id , setId]=useState("")
const [description, setDescription]= useState("")
const [duration , setDuration]=useState("")
const [date, setDate]= useState("")
///////// End Of State /////////////


//////  fatch functions /////
const postLogs = async ()=>{
    const res =  fetch('/workout/api/users/' + id +'/exercises',{
        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body: 
            JSON.stringify({
            "description":description,
            "duration":duration,
            "date":date,
            })
            })
        const data = await res
        return data 
    }
////// end fatch functions /////


//////////// omponent Fucntions //////////

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
        await postLogs().then((data)=>data)
    setId("")
    setDate("")
    setDescription("")
    setDuration("")
    }else {
    window.alert(" ID is Required And Need To be At list 3 Carecters")
    }
    
}
//////////////End Of Functions /////////////////


return(
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
        </div>
    )
}
//////////////////// End  Form Component ///////////
