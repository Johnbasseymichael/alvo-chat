import React, { useContext, useState } from 'react'
import './styles/search.scss'

import {
  query, where,
  collection,
  getDocs, getDoc,
  setDoc, doc, updateDoc,
  serverTimestamp
} from 'firebase/firestore'
import { db } from '../firebase'

import { AuthContext } from '../context/AuthContext'


const Search = () => {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const { currentUser } = useContext(AuthContext)


  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", userName));

    try {
      const querySnapShot = await getDocs(q);
      querySnapShot.forEach(doc => setUser(doc.data()))
    } catch (error) {
      console.log(error)
      setErr(true)
    }
  }

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  }

  const handleSelect = async () => {
    const combinedId = currentUser.uid > user.uid
      ? currentUser.uid + user.uid
      : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, 'userchats', currentUser.uid), {
          [combinedId + ".userinfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        });

        await updateDoc(doc(db, 'userchats', user.uid), {
          [combinedId + ".userinfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        });

      }
    } catch (error) {
      console.error(error);
    }

    setUser(null)
    setUserName('')
  }







  

  return (

    <div className="search">
      <div className="search-form">
        <span className='search-icon'>...</span>
        <input type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={e => setUserName(e.target.value)} value={userName} />
      </div>

      {userName && <div className="search-result">
        {err && <p>User not fonud! or something went wrong</p>}

        {user && <div className="user" onClick={handleSelect}>
          <div className="profile-photo">
            <img src={user.photoURL} />
          </div>

          <div className="user-chat-info">
            <span>{user.displayName}</span>
          </div>
        </div>}

      </div>}

    </div>

  )
}

export default Search
