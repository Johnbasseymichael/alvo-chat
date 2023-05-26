import React, { useContext } from 'react'
import "./styles/chat.scss"
import Messages from './Messages'
import Input from './Input'
import { ChatsContext } from '../context/ChatsContext'
import { MdVideoChat } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";


const Chat = () => {
  const { data } = useContext(ChatsContext)


  return (
    <div className='chat'>

      <div className="current-chat-info">
        <span>{data?.user?.displayName}</span>

        <div className="chat-icons">
          <span><MdVideoChat/></span>
          <span><BsFillMicFill/></span>
          <span><BiMenuAltRight/></span>
        </div>
      </div>

      <Messages />
      <Input />

    </div>
  )
}

export default Chat
