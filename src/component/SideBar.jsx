import React from 'react'
import "./styles/side-bar.scss"
import NavBar from './NavBar'
import Search from './Search'
import Chats from './Chats'
import ActiveUsers from './ActiveUsers'



const SideBar = () => {

  return (
    <div className='side-bar'>
      <NavBar />
      <Search />
      <ActiveUsers/>
      <Chats />
      <button className='logout-btn'>Log out</button>
    </div>
  )
}

export default SideBar
