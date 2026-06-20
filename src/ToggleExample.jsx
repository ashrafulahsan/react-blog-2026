import { useState } from "react";

function ToggleExample(){
    const [display1, setDisplay1] = useState(true)

    return (
        <>
            <h1>Toggle in react js</h1>
            <button onClick={()=>setDisplay1(!display1)}>Toggle</button>
            {display1?<h1>Ashraful Ahsan</h1>:null}
        </>
    )
}

export default ToggleExample