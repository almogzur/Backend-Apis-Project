
const { useState } = require("react")

export default  function WorkOut () {

const [user, setUser]= useState("")
const [id, setId]= useState("")
const [email , setEmail]=useState("")
const [time, setTime]= useState("")

const change = (e)=>{
    setUser(e.target.value)
    setEmail(e.target.value)
    setId(e.target.value)
    setTime(e.target.value)

}

const click = ()=>{
    fetch('/api/workout',{
        method:"POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:`user=${user}
              id=${id}
              email=${email}
              time=${time}`
    })
    setUser("")
    setId("")
    setEmail("")
    setId("")
    setTime("")
}
return (
    <div id="work">
        <h1>Exercise Tracker</h1>

        <div id="work-form">
          <form action="submit">
            <input 
            id="user"
            placeholder="User"
            type="text"s
            onChange={change}
             />
             <br/>
        <button
        className="btn btn-info"
        id="user-btn"
        type="submit"
        onClick={click}>click me
        </button>
        </form>
        </div>

        <WorkOutForm/>
    </div>
)
}

function WorkOutForm (){
    return(
        <div id="filds">
            <form>
                <input
                placeholder="id"></input><br/>
                <input
                placeholder="email"></input><br/>
                <input
                placeholder="distance"></input><br/>
                <input
                placeholder="time"></input><br/>
            </form>
            <button
            className="btn btn-info"
            >SEND</button>
        </div>
    )
}