import {useState} from "react";

function StateExample(){
    const [fruit, setFruit] = useState('Apple')
    const updateFruit=()=>{
        setFruit('Banana')
    }

    return (
        <div>
            <h1>State in react js</h1>
            <h1>{fruit}</h1>
            <button onClick={updateFruit}>Change Fruit Name</button>
        </div>
    )
}

export default StateExample