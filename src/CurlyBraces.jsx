function CurlyBraces(){
    
    const name="Ashraful Ahsan"
    let x=10
    let y=20

    const usetObj = {
        name: "Ashraful Ahsan",
        email: "ahsanashraful@gmail.com",
        age: 36
    }

    const userArray = ['Ashraful', 'Mahmudul', 'Sonia']

    let path = "https://picsum.photos/id/1/200/200"

    function fruit(){
        return "Apple"
    }

    function sum(a,b){
        return a+b
    }

    function operation(a,b,op){
        if(op=="+"){
            return a+b
        }else if(op=="-"){
            return a-b
        }else{
            return 'Operator not available.'
        }
    }

    return (
        <>
            <h1>JSX With curly braces</h1>
            <h1>{name?name:'User not found'}</h1>
            <h1>{x+y}</h1>
            <h1>{fruit()}</h1>
            <h1>{sum(10,23)}</h1>
            <h1>{operation(12,89, '+')}</h1>
            <h1>{usetObj.email}</h1>
            <h1>{userArray[2]}</h1>
            <img src={path}/>
        </>
    )
}

export default CurlyBraces