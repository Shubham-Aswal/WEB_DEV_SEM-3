import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
const Home = () => {
  return (
    <>
    <nav>
        
        <ul>
             <Link to={"/contact"}> <li>Contact Us</li></Link>
              <Link to={"/about"}><li>About us</li></Link>
               <Link to={"/services"}><li>Services</li></Link>
       
        </ul>
    </nav>
    </>
  )
}

export default Home
