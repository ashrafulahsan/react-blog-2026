import User from "./User"

function App() {

  let profileInfo = {
    name: 'Ashraful',
    age: 36,
    email: 'ahsanashraful@gmail.com'
  }

  return (
    <>
     <User profileInfo={profileInfo} />
    </>
  )
}

export default App
