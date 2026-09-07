import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import axios from 'axios'
import "./App.css"
import Signup from './Signup'
import Login from './Login'
const App = () => {

  return (
  <Routes>
    <Route path="/" element={<Signup/>} />
    <Route path = "/login" element = {<Login/>} />
  </Routes>
)

}

export default App