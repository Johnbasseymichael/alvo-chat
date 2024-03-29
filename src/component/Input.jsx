import React, { useContext, useState } from 'react'
import './styles/input.scss'

import { AuthContext } from '../context/AuthContext'
import { ChatsContext } from '../context/ChatsContext'
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { BsFillImageFill,BsFillSendFill } from "react-icons/bs";

import { v4 as uuid } from 'uuid'


const Input = () => {
  const [text, setText] = useState('')
  const [img, setImg] = useState(null)

  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatsContext)

  const handleSend = async () => {
    if (img) {

      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {

        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, 'chats', data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL
              })
            })
          });
        }

      );


    } else {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        })
      })
    }

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [data.chatId + '.lastMessage']: {
        text
      },
      [data.chatId + '.date']: serverTimestamp()
    })

    await updateDoc(doc(db, 'userChats', data.user.uid), {
      [data.chatId + '.lastMessage']: {
        text
      },
      [data.chatId + '.date']: serverTimestamp()
    })

    setImg(null)
    setText('')

  }

  return (
    
    <div className='input'>
      <input type="text" placeholder='Send a message'
        onChange={e => setText(e.target.value)}
        value={text} />

      <input type="file" name="" id="file-inp" style={{display:'none'}}
        onChange={e => setImg(e.target.files[0])} />
        {img && <p>Image selected</p>}

      <div className="input-action-btn">
        <button><label htmlFor="file-inp"><BsFillImageFill/></label></button>
        <button onClick={handleSend}><BsFillSendFill/></button>
      </div>
    </div>
  )
}

export default Input
