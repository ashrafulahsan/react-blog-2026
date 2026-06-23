import Student from "./Student"

function CollegeSingle({college}){
    return(
        <div style={{
            backgroundColor: "#c0c0c0",
            padding: "20px",
            borderBottom: "2px solid #000",
            margin: "20px",
            borderRadius: "10px"
            }}>
            <h2>{college.name}</h2>
            <ul>
                <li>{college.city}</li>
                <li>{college.website}</li>
                <li>
                    <Student students={college.students}/>
                </li>
            </ul>
        </div>
    )
}

export default CollegeSingle