function Wrapper({children, color="green"}){
    return(
        <div style={{color: color, border: "5px solid blue", width: "300px", padding: "10px", margin: "10px"}}>
            {children}
        </div>
    )
}

export default Wrapper