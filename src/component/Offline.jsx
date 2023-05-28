import React, { useState } from 'react'
import './styles/offline.scss'
import { AiOutlineCloseCircle } from "react-icons/ai";

const Offline = ({openStatus}) => {
    const [open, setOpen] = useState(openStatus)

    const handleRefresh = () => {
        document.location.reload()
    }


    return (
        open &&
        <div className='offline'>
            <div className="offline-wrapper">
                <span className="close-icon" onClick={() => setOpen(false)}><AiOutlineCloseCircle /></span>
                <p>You are currently offline</p>
                <p>Check your internet connection and click the button to refresh</p>
                <button className='refresh-btn' onClick={handleRefresh}>Try Again</button>
            </div>
        </div>
    )
}

export default Offline
