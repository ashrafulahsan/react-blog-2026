function User({profileInfo}){
    return(
        <div>
            <h1>User Component</h1>
            <p>Name: {profileInfo.name}</p>
            <p>Age: {profileInfo.age}</p>
            <p>Email: {profileInfo.email}</p>
        </div>
    )
}

export default User