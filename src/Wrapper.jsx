function Wrapper({children}){
    return(
        <div style={{color: "blue", border: "5px solid blue", width: "300px", padding: "10px", margin: "10px"}}>
            {children}
        </div>
    )
}

export default Wrapper