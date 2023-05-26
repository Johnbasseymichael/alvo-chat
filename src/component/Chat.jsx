import React, { useContext } from 'react'
import "./styles/chat.scss"
import Messages from './Messages'
import Input from './Input'
import { ChatsContext } from '../context/ChatsContext'


const Chat = () => {
  const { data } = useContext(ChatsContext)


  return (
    <div className='chat'>

      <div className="current-chat-info">
        <span>{data?.user?.displayName}</span>

        <div className="chat-icons">
          <span>...</span>
          <span>...</span>
          <span>...</span>
        </div>
      </div>

      <Messages />
      <Input />

    </div>
  )
}

export default Chat
