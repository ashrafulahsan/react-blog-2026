import { useState } from "react"

function Radio(){
    const [gender, setGender]=useState("male")

    return(
        <>
            <h1>Handle radio button</h1>
            <h4>Select gender</h4>

            <input 
                type="radio" 
                onChange={(event)=>setGender(event.target.value)} 
                name="gender" value={"male"} 
                id="male"
                checked={gender=='male'}
            />
            <label htmlFor="male">Male</label>

            <input 
                type="radio" 
                onChange={(event)=>setGender(event.target.value)} 
                name="gender" 
                value={"female"} 
                id="female"                
                checked={gender=='female'}
            />
            <label htmlFor="female">Female</label>

            <h2>Selected gender: {gender}</h2>
        </>
    )
}

export default Radio