function ToDo(){

    function callFunc(){
        alert("Function called.")
    }

    return(
        <div>
            <h1>Ashraful Ahsan ToDo List</h1>
            <img 
                src="https://picsum.photos/id/1/200/200"
                alt="Ashraful Ahsan"
                class="photo"
            />
            <ul>
                <li>ToDo List 1</li>
                <li>ToDo List 2</li>
                <li>ToDo List 3</li>
            </ul>    
            <button onClick={callFunc}>Click Me</button>
        </div>
    )
}

export default ToDo