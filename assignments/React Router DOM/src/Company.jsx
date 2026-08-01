import React from 'react'
import "./company.css"
import {Link} from "react-router-dom"
import {Routes,Route} from "react-router-dom"
import Home from "./company/Home.jsx"
import About from "./company/About.jsx"
import Contact from "./company/Contact.jsx"
const Company = () => {
  return (
    <>
    <nav>
        <h3>Food Company</h3>
        <ul>
            <Link to = {"/"}><li>Home</li></Link>
             <Link to = {"/about"}><li>About us</li></Link>
              <Link to = {"/contact"}><li>Contact Us</li></Link> 
        </ul>
    </nav>
    <div className='main'>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/contact" element = {<Contact/>}/>
        </Routes>
        
    </div>
   </>
  )
}

export default Company
