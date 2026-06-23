import { useState } from "react";

function App() {

  const [counter,setCounter]=useState(0)
  const [data,setData]=useState(0)

  function callOnce(){
    console.log("Call this function once.");
  }

  callOnce()

  return (
    <>
      <h1>useEffect Hook</h1> 
      <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
      <button onClick={()=>setData(data+1)}>Data {data}</button>
    </>
  )
}

export default App
