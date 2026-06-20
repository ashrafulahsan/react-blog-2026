import Header from './Header.jsx'
import MultiComponent from './MultiComponent.jsx'
import MultiCompoExport, {Profile, Settings, UserKey} from './MultiCompoExport.jsx'
import JsxExample from './JsxExample.jsx'

function App() {

  return (
    <>
     <Header />
     <h1>Hello, React!</h1>
     <MultiComponent />
     <MultiCompoExport />
     <Profile />
     <Settings />
     <p>User Key: {UserKey}</p>
     <JsxExample />
    </>
  )
}

export default App
