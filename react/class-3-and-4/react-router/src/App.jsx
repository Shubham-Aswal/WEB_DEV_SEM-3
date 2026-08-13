import React from 'react'
import Nav from './Nav'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
const App = () => {
  return (
   <>
   <Nav />

   <Routes>
    <Route path='/' element={<Home/>  }/>
    <Route path="/about" element = {<About/>}/>
    </Routes>
   </>
  )
}

export default App
