
import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { ChatsContext } from '../context/ChatsContext';
import { db } from '../firebase';
import Message from './message';
import './styles/messages.scss';

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatsContext);

    useEffect(() => {
        const fectchMessages = () => {

            const onSub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
                if (doc.exists()) {
                    setMessages(doc.data().messages);
                }
            });

            return () => {
                onSub();
            };
        }
        data.chatId && fectchMessages()

    }, [data.chatId])


    return (
        <div className='messages'>
            {messages?.map((m) => {
                return <Message message={m} key={m.id} />;
            })}
        </div>
    );
};

export default Messages;


