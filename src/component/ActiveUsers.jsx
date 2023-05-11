import React from 'react'
import me from '../../img/me.jpg'
import './styles/ActiveUsers.scss'



const ActiveUsers = () => {
  return (
    <div className='active-users'>
      <div className="wrapper">

        <div className="active-user">
          <div className="profile-photo">
            <img src={me} />
          </div>
            <span className="active-indicator"></span>
        </div>


        <div className="active-user">
          <div className="profile-photo">
            <img src={me} />
          </div>
            <span className="active-indicator"></span>
        </div>
        <div className="active-user">
          <div className="profile-photo">
            <img src={me} />
          </div>
            <span className="active-indicator"></span>
        </div>

      </div>
    </div>
  )
}

export default ActiveUsers
