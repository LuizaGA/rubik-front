import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Path from './routes/path'
import {BrowserRouter} from 'react-router-dom'
import './styles.css'
import SongProvider from "./context/song";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SongProvider>
      <BrowserRouter> 
        <Path />
      </BrowserRouter>
    </SongProvider>
  </React.StrictMode>
)
