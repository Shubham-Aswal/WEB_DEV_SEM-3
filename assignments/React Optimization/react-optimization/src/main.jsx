import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PartA from './PartA.jsx'
import PartB from './PartB.jsx'
import PartC from './PartC.jsx'
import PartC2 from './PartC2.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PartC2 />
  </StrictMode>,
)
