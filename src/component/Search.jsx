import React from 'react'
import me from '../../img/me.jpg'
import './styles/search.scss'

const Search = () => {
  return (

    <div className="search">
      <div className="search-form">
        <span className='search-icon'>...</span>
        <input type="text" placeholder='Find a user'/>
      </div>

      <div className="search-result">

        <div className="user">
          <div className="profile-photo">
            <img src={me} />
          </div>

          <div className="user-chat-info">
            <span>jane</span>
          </div>
        </div>

      </div>
      
    </div>

  )
}

export default Search
