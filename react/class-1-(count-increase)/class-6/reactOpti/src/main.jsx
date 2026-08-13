import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LocalStorage from './LocalStorage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocalStorage/>
  </StrictMode>,
)
