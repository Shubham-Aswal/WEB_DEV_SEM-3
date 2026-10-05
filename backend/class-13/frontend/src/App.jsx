import React from 'react'
import { Routes,Route } from 'react-router-dom'
import "./App.css"
import Signup from './Signup.jsx'
import Login from './Login'
import Dash from './Dash.jsx'
import ForgotPassword from './ForgotPassword.jsx'
import ResetPassword from './ResetPassword.jsx'
const App = () => {

  return (
  <Routes>
    <Route path="/" element={<Signup/>} />
    <Route path = "/login" element = {<Login/>} />
    <Route path = "/forgot-password" element = {<ForgotPassword/>} />
    <Route path = "/reset-password" element = {<ResetPassword/>} />
    <Route path ="/dashboard" element = {<Dash/>} />
  </Routes>
)

}

export default App