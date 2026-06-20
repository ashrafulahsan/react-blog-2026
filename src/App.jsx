import College from "./College"
import User from "./User"

function App() {

  let profileInfo = {
    name: 'Ashraful',
    age: 36,
    email: 'ahsanashraful@gmail.com'
  }

  let collegeNames = ['BUET', 'DU', 'KUET', 'RUET']

  return (
    <>
     <User profileInfo={profileInfo} />
     <College names={collegeNames}/>
    </>
  )
}

export default App
