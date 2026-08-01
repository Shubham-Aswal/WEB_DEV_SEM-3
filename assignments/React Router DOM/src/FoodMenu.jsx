import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './foodMenu/Home.jsx'
import Pizza from './foodMenu/Pizza.jsx'
import Burger from './foodMenu/Burger.jsx'
import Drinks from './foodMenu/Drinks.jsx'

const FoodMenu = () => {
  return (
    <div style={{ fontFamily: 'Arial', minHeight: '100vh', background: '#fff8f2', color: '#333' }}>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '15px 20px', background: '#d9534f', boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
        <Link to="/pizza" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Pizza</Link>
        <Link to="/burger" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Burger</Link>
        <Link to="/drinks" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Drinks</Link>
      </nav>

      <div style={{ padding: '30px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/burger" element={<Burger />} />
        <Route path="/drinks" element={<Drinks />} />
      </Routes>
      </div>
    </div>
  )
}

export default FoodMenu
