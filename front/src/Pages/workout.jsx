
const { useState } = require("react")


//////// Main Componenet ////////
export default  function WorkOut () { // nexted component {WorkOutForm}

const [user, setUser]= useState("")

const change = (e)=>{
    setUser(e.target.value)
  
}
const click = ()=>{
    fetch('/api/workout',{
        method:"POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:`user=${user}`
    })
    setUser("")
}
return (
    <div id="work">
        <h1>Exercise Tracker</h1>

        <div id="work-form">
          <form action="submit">

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
        type="submit"
        onClick={click}
        >click me
        </button>
        </form>
        </div>

        <WorkOutForm user={user}/>
    </div>
)
}
///////////////


///////// Form Component /////
function WorkOutForm (props){

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

