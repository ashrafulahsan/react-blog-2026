import { useEffect, useState } from "react";

const Clock = ({color}) => {
    const [time, setTime] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        }, 1000)
    }, [])

    return(
        <>
            <div style={{color: "white", backgroundColor: color, width: "200px", padding: "10px", borderRadius: "20px", fontSize: "56px"}}>
                {time}
            </div>
        </>
    )
}

export default Clock 