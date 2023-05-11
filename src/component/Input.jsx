import React from 'react'
import './styles/input.scss'


const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Send a message' />
      <div className="input-action-btn">
        <button>sen</button>
        <button>sen</button>
        <button>send</button>
      </div>
    </div>
  )
}

export default Input
