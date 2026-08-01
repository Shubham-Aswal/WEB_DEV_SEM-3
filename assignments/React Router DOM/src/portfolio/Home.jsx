import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
const Home = () => {
  return (
    <>
    <nav>
        
        <ul>
             <Link to={"/projects"}> <li>projects</li></Link>
              <Link to={"/resume"}><li>resume</li></Link>
       
        </ul>
    </nav>
    </>
  )
}

export default Home
