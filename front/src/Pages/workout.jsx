const { useState } = require("react")

exports.WorkOut = ()=>{

const [state , setState]= useState("")

const click = ()=>{
    setState("click")

}
return (
    <div>
        <h1>{state}</h1>
        <form action="submit">
            <input type="text" />
        </form>
        <button
        type="submit"
        onClick={click}>click me</button>
    </div>
)

    
}