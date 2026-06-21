import { useState } from "react"

function Checkbox(){

    const [skills,setSkills]=useState([])
    const handleSkills=()=>{
        // console.log(event.target.value, event.target.checked)
        if(event.target.checked){
            setSkills([...skills, event.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }

    return(
        <div>
            <h1>Select your skills</h1>

            <input onChange={handleSkills} type="checkbox" id="php" value="php" />
            <label htmlFor="php">PHP</label>
            <br /> <br />
            <input onChange={handleSkills} type="checkbox" id="js" value="js" />
            <label htmlFor="js">JS</label>
            <br /> <br />
            <input onChange={handleSkills} type="checkbox" id="nodejs" value="nodejs" />
            <label htmlFor="nodejs">Node JS</label>
            <br /> <br />
            <input onChange={handleSkills} type="checkbox" id="java" value="java" />
            <label htmlFor="java">Java</label>
            <br /> <br />
            
            <p>Skills: {skills.toString()}</p>
        </div>
    )
}

export default Checkbox