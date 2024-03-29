import React, { useContext } from 'react'
import { Logo } from './Logo'
import './styles/nav-bar.scss'
import { AuthContext } from '../context/AuthContext'
import { HiOutlineDotsHorizontal } from "react-icons/hi";




const NavBar = () => {
  const { currentUser } = useContext(AuthContext)


  return (
    <div className='nav-bar'>
      <Logo />

      <div className="user">
        <div className="profile-photo">
          <img src={currentUser.photoURL} alt="me" />
        </div>
        <span>{currentUser.displayName}</span>
        <button><HiOutlineDotsHorizontal/></button>
      </div>
    </div>
  )
}

export default NavBar
