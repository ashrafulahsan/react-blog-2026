import { useState } from "react";
import Counter from "./Counter"

function UseEffectProps(){
    const [count,setCount]=useState(0)
    const [data,setData]=useState(0)

    return(
        <div>
            <Counter count={count} data={data}/>
            <button onClick={()=>setCount(count+1)}>Counter {count}</button>
            <button onClick={()=>setData(data+1)}>Data {data}</button>
        </div>
    )
}

export default UseEffectProps