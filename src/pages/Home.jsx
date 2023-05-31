import React, { createContext, useContext, useEffect, useState } from 'react'
import Chat from '../component/Chat'
import SideBar from '../component/SideBar'
import { ChatsContext } from '../context/ChatsContext'
import Offline from '../component/Offline'
import MobileVersion from '../component/MobileVersion'
import './styles/home.scss'


export const WindowWidth = createContext()

const Home = () => {

    const { data } = useContext(ChatsContext)
    const [isOnline, setIsOnline] = useState(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        setIsOnline(navigator.onLine);
    }, [isOnline])

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (

        <WindowWidth.Provider value={{ windowWidth }}>
            {isOnline ? (
                windowWidth > 700 ? (
                    <div className="home">
                        <div className="home-wrapper">
                            <SideBar />
                            {data.chatId && <Chat />}
                        </div>
                    </div>
                ) : (
                    <MobileVersion />
                )
            ) : (
                <Offline openStatus={true} />
            )}
        </WindowWidth.Provider>

    )
}

export default Home
