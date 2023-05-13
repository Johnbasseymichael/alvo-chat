import React, {useState} from 'react'
import { Logo } from '../component/Logo'
import { useNavigate, Link } from 'react-router-dom'
import './styles/login.scss'


import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

  const [error, setError] = useState(false)
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/')
    } catch (err) {
      setError(true)
      console.error(err);
      console.log(err.name);
    }

  }


  return (
    <div className="login-container">

      <div className='login'>
        <Logo />
        {error && <p style={{ color: 'red' }}>Something went wrong</p>}
        <span className='title'>Login</span>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter your email' />
          <input type="password" placeholder='Enter your password' />
          <button>Sign In</button>
        </form>

        <p>You don't have an account? <Link to="/register">Register</Link> </p>
      </div>
    </div>
  )
}

export default Login
