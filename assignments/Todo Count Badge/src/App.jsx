import React from 'react'
import { useState } from 'react'
import Badge from '../Badge'
import './App.css'
const App = () => {
  let [arry,setArry] = useState(["task1","task2"])
  let[val,setVal]  = useState("");
  return (
    <div>
      <form onSubmit= {(e)=>{e.preventDefault(); if(!val){return alert("Please enter a task")} setArry([...arry,val]); setVal(""); 
      }}>
        <label htmlFor="task">Enter Task : </label>
        <input  type = "text" placeholder='Enter Task' value = {val} onChange={(e)=>{setVal(e.target.value)}}/>
        <button type = "submit">Add Task</button>
        
      </form>
      <Badge arry = {arry} />
    </div>
  )
}

export default App
