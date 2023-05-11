import React from 'react'
import { Logo } from '../component/Logo'
// import { Link } from 'react-router-dom'
import './styles/login.scss'

const Login = () => {
  return (
    <div className="login-container">

      <div className='login'>
        <Logo />
        <span className='title'>Login</span>

          <form>
            <input type="text" placeholder='Enter your email' />
            <input type="password" placeholder='Enter your password' />
            <button>Sign In</button>
          </form>

        <p>You don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login
