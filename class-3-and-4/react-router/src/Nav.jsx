import React from 'react'
import "./nav.css"
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav'>
        <ul>
            <Link to = "/">

            <li>Home</li>
            </Link>

            <Link to = "/about">
             <li>About</li>

            </Link>

            
        </ul>
    </div>
  )
}

export default Nav
