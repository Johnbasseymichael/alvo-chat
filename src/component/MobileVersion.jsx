import React from 'react'
import SideBar from './SideBar'
import Chat from './Chat'


const mobileVersion = () => {
  return (
    <div className="mobile-version">

      <SideBar />
      <Chat />

    </div>
  )
}

export default mobileVersion
