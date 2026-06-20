function College({names}){
    return(
        <>
            <h1>College</h1>
            <ul>
                <li>{names[0]}</li>
                <li>{names[1]}</li>
                <li>{names[2]}</li>
                <li>{names[3]}</li>
            </ul>
        </>
    )
}

export default College