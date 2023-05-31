import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext'
import { ChatsContextProvider } from './context/ChatsContext'
import { OpenChatContextProvider } from './context/OpenChat.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <OpenChatContextProvider>
    <AuthContextProvider>
      <ChatsContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChatsContextProvider>
    </AuthContextProvider>
  </OpenChatContextProvider>
)
