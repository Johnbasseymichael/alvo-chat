import React, { useContext, useEffect, useRef } from 'react'
import './styles/message.scss'
import { AuthContext } from '../context/AuthContext'
import { ChatsContext } from '../context/ChatsContext'

const message = ({ message }) => {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatsContext)

  const ref = useRef()
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }, [message])


  return (

    <div ref={ref} className={`message ${message.senderId === currentUser.uid && 'owner'} `}>
      <div className="msg-info">
        <div className="profile-photo">
          <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user?.photoURL} />
        </div>
      </div>

      <div className="msg-content">
        <span className="msg">{message.text}</span>
        {message.img && <img src={message.img} />}
      </div>
    </div>

  )
}

export default message
