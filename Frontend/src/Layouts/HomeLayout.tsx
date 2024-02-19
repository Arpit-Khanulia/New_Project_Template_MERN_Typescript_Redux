
// import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'



const HomeScreen = () => {
  const token = localStorage.getItem('accessToken');
  
    if(!token){
      // navigate('/login');
      return <Navigate to='/login'/>
    }

  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default HomeScreen
