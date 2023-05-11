import React from 'react'
import "./styles/chat.scss"
import Messages from './Messages'
import Input from './Input'


const Chat = () => {
  return (
    <div className='chat'>

      <div className="current-chat-info">
        <span>jane</span>
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
