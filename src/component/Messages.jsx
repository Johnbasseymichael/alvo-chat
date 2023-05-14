import React from 'react'
import Message from './message'
import './styles/messages.scss'



const Messages = () => {
    return (
        <div className='messages'>
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    )
}

export default Messages
