function User(data){
    return(
        <div>
            <h1>User Component</h1>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
        </div>
    )
}

export default User