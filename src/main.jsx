import React from 'react'
import ReactDOM from 'react-dom/client'
// import { AuthContext } from '../context/AuthContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <AuthContext.Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  // </AuthContext.Provider>
)
