function Fruit(){
    return <h1>Fruit</h1>
}

function Vegetable(){
    return <h1>Vegetable</h1>
}

function Fish(){
    return <h1>Fish</h1>
}

function Meet(){
    return <h1>Meet</h1>
}

function MultiComponent() {
    return (
        <>
            <Fruit />
            <Vegetable />
            <Fish />
            <Meet />
        </>
    )
}

export default MultiComponent