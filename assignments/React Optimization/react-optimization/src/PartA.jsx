import React, { useState } from 'react'
import ProfileCard from './partA/ProfileCard';
const PartA = () => {
    let [count,setCount] = useState(0);
    let[title,setT] = useState("");
    let [city,setC] = useState("")
  return (
    <div>
        <label htmlFor="title">Title : </label>
        <input name='title' onChange={(e)=>{setT(e.target.value)}}/>
        <label htmlFor="city">City : </label>
        <input type="text" name= 
        "city" onChange={(e)=>{setC(e.target.value)}} />
        <span>
            <div>count : {count}</div>
            <button onClick={()=>{setCount(count+1);console.log("count increased - parent re-rendered")}}>click</button>
        </span>

        <ProfileCard title ={title} city ={city }/>
      
    </div>
  )
}

export default PartA
