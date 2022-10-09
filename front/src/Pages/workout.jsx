
const { useState } = require("react")

exports.WorkOut = function WorkOut () {

const [state , setState]= useState("")

const change = (e)=>{
    setState(e.target.valu)
}

const click = ()=>{
    setState("click")
    fetch('/api/workout',{
        method:"POST",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body:`${"someconst"}`
    })
}
return (
    <div>
        <h1>{state}</h1>
        <form action="submit">
            <input 
            type="text"s
            onChange={change}
             />
        </form>
        <button
        type="submit"
        onClick={click}>click me</button>
    </div>
)

    
}