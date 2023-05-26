import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import './styles/ActiveUsers.scss'



const ActiveUsers = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className='active-users'>
      <div className="wrapper">

        <div className="active-user">
          <div className="profile-photo">
            <img src={currentUser.photoURL} />
          </div>
            <span className="active-indicator"></span>
        </div>


        <div className="active-user">
          <div className="profile-photo">
            <img src={currentUser.photoURL} />
          </div>
            <span className="active-indicator"></span>
        </div>
        <div className="active-user">
          <div className="profile-photo">
            <img src={currentUser.photoURL} />
          </div>
            <span className="active-indicator"></span>
        </div>

      </div>
    </div>
  )
}

export default ActiveUsers
