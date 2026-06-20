import User from "./User"

function App() {

  let name="Ashraful"
  let age=36
  let email="ahsanashraful@gmail.com"

  return (
    <>
     <User name={name} age={age} email={email} />
    </>
  )
}

export default App
