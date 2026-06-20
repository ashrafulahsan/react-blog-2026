function ParamPass(){
    function callFunc(){
        alert("Function called")
    }

    const fruit=(name)=>{
        alert(name)
    }

    return (
        <div>
            <h1>Event and function call</h1>
            <button onClick={callFunc}>Func Call Btn</button>
            <button onClick={()=>fruit('apple')}>Param Pass Btn</button>
        </div>
    )
}

export default ParamPass