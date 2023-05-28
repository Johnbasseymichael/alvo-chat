import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatsContext } from '../context/ChatsContext'
import { db } from '../firebase'
import './styles/chats.scss'

const Chats = () => {
  const [chats, setChats] = useState([])

  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatsContext)


  useEffect(() => {
    const getChats = () => {
      const onSub = onSnapshot(doc(db, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data())
      })

      return () => {
        onSub()
      }
    }
    currentUser.uid && getChats()

  }, [currentUser.uid])


  const handleSelect = (u) => {
    dispatch({ type: 'CHANGE_USER', payload: u })
  }

  return (
    <div className='chats'>

      {Object?.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => {

        return (
          <div className="chated"
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)} >

            <div className="chat-content">

              <div className="profile-photo">
                <img src={chat[1].userInfo.photoURL} alt="" />
              </div>

              <div className="chat-info">
                <span className="chat-name">{chat[1].userInfo.displayName}</span>
                <span className='last-msg'>{chat[1].lastMessage?.text}</span>
              </div>

            </div>

            <div className="time">12-12-12</div>
          </div>
        )

      })}

    </div>
  )
}

export default Chats

