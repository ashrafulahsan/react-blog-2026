import { useEffect } from "react"

const Counter=({count, data})=>{
    const handleCounter=()=>{
        console.log("Handle counter called")
    }
    
    const handleData=()=>{
        console.log("Handle Data called")
    }

    useEffect(()=>{
        // This code will run for mounting only
        // Mount: when first time load a code/module
        console.log('This code will run for mounting only')
        handleCounter()
    }, [])

    useEffect(()=>{
        // This code will call when mounting and update any info
        console.log('This code will call when mounting and update any info')
        handleData()
    })

    useEffect(()=>{
        // This code will call when mounting and update data
        console.log('This code will call when mounting and update data')
        handleData()
    }, [data])

    useEffect(()=>{        
        return()=>{  
            // This code will run when unmount a component
            console.log('Call when unmount')        
        }    
    }, [])

    return(
        <div>
            <h1>Counter value {count}</h1>
            <h1>Data value {data}</h1>
        </div>
    )
}

export default Counter