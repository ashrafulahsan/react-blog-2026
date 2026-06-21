import { useState } from "react"

function ControlledComponent(){

    const [name, setName]=useState('')
    const [password, setPassword]=useState('')
    const [email, setEmail]=useState('')

    return(
        <>
            <h1>Controlled Component</h1>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name" />
            <br/> <br/>
            <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Password" />
            <br/> <br/>
            <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email" />
            <br/> <br/>
            <button>Submit</button>
            <button onClick={()=>{setEmail('');setName('');setPassword('');}}>Clear</button>
            <br/> <br/>
            <p>Name: {name}</p>
            <p>Password: {password}</p>
            <p>Email: {email}</p>
        </>
    )
}

export default ControlledComponent