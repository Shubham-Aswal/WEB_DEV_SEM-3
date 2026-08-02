import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PartB from './PartB.jsx'
import {Context} from './context.js'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Context.Provider value={"hello world"}>
    <PartB />
  </Context.Provider>
  </BrowserRouter>
)
 
