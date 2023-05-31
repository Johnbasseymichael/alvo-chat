import React, { useContext } from 'react'
import SideBar from './SideBar'
import Chat from './Chat'
import './styles/mobileVersion.scss'
import { OpenChatContext } from '../context/OpenChat'




const mobileVersion = () => {
  const { isMsgOpen } = useContext(OpenChatContext)

  return (

    <div className="mobile-version">
      <div className={`mv-sidebar ${isMsgOpen && 'open-it'}`}>
        <SideBar />
      </div>

      <div className="mv-chat">
        <Chat />
      </div>
    </div>
  )
}

export default mobileVersion
