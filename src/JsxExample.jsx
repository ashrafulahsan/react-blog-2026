function JsxExample(){
    const userName = "Anil Sidhu";
    let x=20;
    let y=30;

    return (
        <>
            <h1>{userName}</h1>
            <h1>{10+20+30}</h1>
            <h1>{x*y}</h1>
            <button onClick={()=>alert("hello")}>Click</button>
        </>
    )
}

export default JsxExample