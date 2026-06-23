import { useEffect } from "react"

const Counter=({count, data})=>{
    const handleCounter=()=>{
        console.log("Handle counter called")
    }
    
    const handleData=()=>{
        console.log("Handle Data called")
    }

    useEffect(()=>{
        handleCounter()
    }, [])

    useEffect(()=>{
        handleData()
    })

    return(
        <div>
            <h1>Counter value {count}</h1>
            <h1>Data value {data}</h1>
        </div>
    )
}

export default Counter