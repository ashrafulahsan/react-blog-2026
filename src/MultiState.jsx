import { useState } from "react"

const MultiState = () => {
    const [countUp, setCountUp] = useState(0)
    const [countDown, setCountDown] = useState(10)

    return (
        <>
            <h1>Count Up: {countUp}</h1>
            <h1>Count Down: {countDown}</h1>
            <button onClick={() => setCountUp(countUp+1)}>Count Up</button>
            <button onClick={() => setCountDown(countDown-1)}>Count Down</button>
        </>
    )
}

export default MultiState