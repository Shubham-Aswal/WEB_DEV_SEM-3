import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import axios from 'axios'
import "./App.css"
import Signup from './Signup.jsx'
import Login from './Login'
import Dash from './Dash.jsx'
const App = () => {

  return (
  <Routes>
    <Route path="/" element={<Signup/>} />
    <Route path = "/login" element = {<Login/>} />
    <Route path ="/dashboard" element = {<Dash/>} />
  </Routes>
)

}

export default App