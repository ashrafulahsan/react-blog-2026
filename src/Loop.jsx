function Loop(){

    const userData = [
        {
            id: 1,
            name: 'Ashraful',
            email: 'ashraful@gmail.com',
            age: 36
        },
        {
            id: 2,
            name: 'Ahsan',
            email: 'ahsan@gmail.com',
            age: 2
        },
        {
            id: 3,
            name: 'Mahmudul',
            email: 'mahmudul@gmail.com',
            age: 38
        },
        {
            id: 4,
            name: 'Hasan',
            email: 'hasan@gmail.com',
            age: 3
        }
    ]

    return(
        <>
            <h1>Loop in JSX with Map Function</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>EMAIL</td>
                        <td>AGE</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user)=>(
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </>
    )
}

export default Loop