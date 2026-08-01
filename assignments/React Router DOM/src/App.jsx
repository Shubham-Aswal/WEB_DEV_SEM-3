import React from 'react'
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Services from "./components/Services.jsx"
import ContactUS from "./components/ContactUS.jsx"
import {Routes,Route} from "react-router-dom"
const App = () => {
  return (
  <>
  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/about" element={<About/>}/>
    <Route path ="/contact" element={<ContactUS/>}/>
    <Route path ="/services" element={<Services/>}/>
  </Routes>

  
  </>
  )
}

export default App
