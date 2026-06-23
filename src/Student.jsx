const Student = ({students}) => {
    return (
        <div>
            <h2>List of students </h2>
            {
                students.map((student)=>(
                    <div>
                        <h4>{student.name}</h4>
                    </div>
                ))
            }
        </div>
    )
}

export default Student