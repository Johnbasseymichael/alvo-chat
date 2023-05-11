import React from 'react'
import {Logo} from './Logo'
import './styles/nav-bar.scss'
import me from '../../img/me.jpg'




const NavBar = () => {
  return (
    <div className='nav-bar'>
      <Logo />

      <div className="user">
        <div className="profile-photo">
        <img src={me} alt="me" />
        </div>
        <span>alvoskiny</span>
        <button>...</button>
      </div>
    </div>
  )
}

export default NavBar
