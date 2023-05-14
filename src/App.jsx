
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import SideBar from './component/SideBar'


function App() {
  const { currentUser } = useContext(AuthContext)
  // console.log(currentUser)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  }

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/'>
            <Route index element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
