import College from "./College"
import User from "./User"
import Wrapper from "./Wrapper"

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
     <Wrapper>
        <h1>This is section 1</h1>
     </Wrapper> 
     <Wrapper>
        <h1>This is section 2</h1>
     </Wrapper> 
    </>
  )
}

export default App
