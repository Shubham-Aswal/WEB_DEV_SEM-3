import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import App from './App.jsx'
import Portfolio from './Portfolio.jsx'
import FoodMenu from './FoodMenu.jsx'
import Company from "./Company.jsx"
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Company />
  </BrowserRouter>

)
