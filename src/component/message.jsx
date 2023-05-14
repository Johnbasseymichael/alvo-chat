import React from 'react'
import './styles/message.scss'
import me from '../../img/me.jpg'

const message = () => {
  return (
    <>
      <div className='message '>
        <div className="msg-info">
          <div className="profile-photo">
            <img src={me} />
          </div>
          <span className="time">just now</span>
        </div>

        <div className="msg-content">
          <span className="msg">this is a test</span>
          <img src={me} />
        </div>
      </div>


      {/* DELETE THIS DIV LETTER */}
      <div className='message owner'>
        <div className="msg-info">
          <div className="profile-photo">
            <img src={me} />
          </div>
          <span className="time">just now</span>
        </div>

        <div className="msg-content">
          <span className="msg">this is a test for the sender</span>
          {/* <img src={me} /> */}
        </div>
      </div>
    </>

  )
}

export default message
