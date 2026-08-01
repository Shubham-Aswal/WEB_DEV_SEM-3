import React from 'react'
import Projects from "./portfolio/Projects.jsx"
import Resume from './portfolio/Resume.jsx'
import { Route,Routes } from 'react-router-dom'
import Home from "./portfolio/Home.jsx"
const Portfolio = () => {
  return (
  
    <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/projects" element={<Projects/>}/>
    <Route path ="/resume" element={<Resume/>}/>
  </Routes>
  )
}

export default Portfolio
