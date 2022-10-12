import React from "react"
const { useState } = require("react")
//////// Main Componenet ////////
export default  function WorkOut () { // nexted component {WorkOutForm}

 //////// state ///////////
const [user, setUser]= useState("")
/////// end state ////////

////// async functions /////
const postData = async ()=>{
    const res  = fetch('/workout/api/',{
       method:'POST',
       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
       body:`user=${user}`,
        })
    const data = await res.json()
           return data
    }

 const getData = async()=>{

  }
/////////// end async functions ////

  // functions ///////////
const change = (e)=>{
    setUser(e.target.value)
}
const click = ()=>{
    postData().then((data)=>{
        console.log(data)
    })
    setUser("")
}
////// end functions /////
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
             />
             <br/>
        <button
        className="btn btn-info"
        id="user-btn"
        onClick={click}
        >click me
        </button>
        
        </div>

        <WorkOutForm user={user}/>
    </div>
)
}
/////////////// end main Componenet /////

///////// Form Component /////
const WorkOutForm = (props)=> {

const [id , setId]=useState("")
const [description, setDescription]= useState("")
const [duration , setDuration]=useState("")
const [date, setDate]= useState("")
const user = props.user

const change = (e)=>{
setId(e.target.value)
setDescription(e.target.value)
setDuration(e.target.value)
setDate(e.target.value)

}

const click = (e)=>{
    fetch('/api/workour/',{
        method:"POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:`id=${id}
               `
    })
    console.log(user)
    setDate("")
    setDescription("")
    setDate("")
    setDuration("")

}
return(
        <div id="filds">

            <form>
                <input
                placeholder="ID"
                value={id}
                onChange={change}
                >
                
                </input>
                <br/>

                <input
                placeholder="Description"
                value={description}
                onChange={change}
                >
                </input>
                <br/>

                <input
                placeholder="Duration"
                value={duration}
                onChange={change}
                
                >
                </input>
                <br/>
                
                <input
                placeholder="Date"
                value={date}
                onChange={change}
                >
                </input>
                <br/>
            </form>

            <button
            onClick={click}
            className="btn btn-info"
            >SEND</button>
        </div>
    )
}
////////////////////

