import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Todo from "./Todo.jsx"
import Todo2 from './Todo2.jsx'
createRoot(document.getElementById('root')).render(

    <Todo2 />
  
)
