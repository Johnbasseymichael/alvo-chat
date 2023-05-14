import React from 'react'
import Chat from '../component/Chat'
import SideBar from '../component/SideBar'
import './styles/home.scss'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-wrapper">
                <SideBar />
                <Chat />
            </div>

            <div className="mobile-display">
                <SideBar />
            </div>
        </div>
    )
}

export default Home
