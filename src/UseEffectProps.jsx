import { useState } from "react";
import Counter from "./Counter"

function UseEffectProps(){
    const [count,setCount]=useState(0)
    const [data,setData]=useState(0)
    const [display,setDisplay]=useState(true)

    return(
        <div>
            {
                display?<Counter count={count} data={data}/>:null
            }    
            <button onClick={()=>setCount(count+1)}>Counter {count}</button>
            <button onClick={()=>setData(data+1)}>Data {data}</button>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
        </div>
    )
}

export default UseEffectProps