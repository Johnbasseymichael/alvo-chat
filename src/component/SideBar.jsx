import React from 'react'
import "./styles/side-bar.scss"
import NavBar from './NavBar'
import Search from './Search'
import Chats from './Chats'
import ActiveUsers from './ActiveUsers'

import {auth} from '../firebase'
import { signOut } from 'firebase/auth'

const handleSignOut = ()=> {
  signOut(auth)
}

const SideBar = () => {

  return (
    <div className='side-bar'>
      <NavBar />
      <Search />
      <ActiveUsers/>
      <Chats />
      <button onClick={handleSignOut} className='logout-btn'>Log out</button>
    </div>
  )
}

export default SideBar
