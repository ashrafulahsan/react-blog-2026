import Clock from "./Clock"
import { useState } from "react"

function App() {

  const [color, setColor] = useState('red')

  return (
    <>
     <h1>Color changing digital clock in React JS</h1>
     <select 
      style={{fontSize: "55px", width: "200px", margin: "10px"}}
      onChange={(event)=>setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="black">Black</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
     </select>
     <Clock color={color}/>
    </>
  )
}

export default App
