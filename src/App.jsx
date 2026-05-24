import './App.css'
import {Route,Routes} from "react-router-dom"
import Home from './components/Home/Home'
import SignUp from './components/UserProfile/SignUp'
function App() {

  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
  <Route path="/sign-up" element={<SignUp/>}/>
   </Routes>
  )
}

export default App
