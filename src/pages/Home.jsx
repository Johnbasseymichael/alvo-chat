import React, { useContext } from 'react'
import Chat from '../component/Chat'
import SideBar from '../component/SideBar'
import { ChatsContext } from '../context/ChatsContext'
import './styles/home.scss'

const Home = () => {
    const {data} = useContext(ChatsContext)
    console.log(data);
    return (
        <div className='home'>
            <div className="home-wrapper">
                <SideBar />
                {data.chatId && <Chat />}
                
            </div>

            {/* <div className="mobile-display">
                <SideBar />
            </div> */}
        </div>
    )
}

export default Home
