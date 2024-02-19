import { BrowserRouter,Routes,Route } from "react-router-dom"
import LoginScreen from "./Pages/Login"
import RegisterScreen from "./Pages/Register"
import HomeScreen from "./Layouts/HomeLayout"



const App = () => {


  return (
    <BrowserRouter>

      <Routes>
          <Route path="/login"  element={<LoginScreen/> } />
          <Route path="/register"  element={<RegisterScreen/> } />
          <Route path="/" element = {<HomeScreen/>}>
          </Route> 
      </Routes>
    
    </BrowserRouter>
  )
}

export default App