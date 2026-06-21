import { useState } from "react"

function InputField(){
    const [inputValue, setInputValue] = useState("")

    return(
        <>
            <h1>Get input field value</h1>
            <input 
                type="text"
                value={inputValue}
                onChange={(event)=>setInputValue(event.target.value)}
            />
            <button onClick={()=>setInputValue("")}>Clear input value</button>
            <p>Inputed value: {inputValue}</p>
        </>
    )
}

export default InputField