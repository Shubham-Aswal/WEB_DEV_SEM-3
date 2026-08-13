import React, { useEffect, useState } from 'react'

const LocalStorage = () => {
    let [data,setData] = useState("");

    useEffect(()=>{
        localStorage.setItem("name",JSON.stringify(data));
    },[data])
    
    let value = localStorage.getItem("name")

  return (
    <div>
        <input  onChange={(e)=>{setData(e.target.value)}} value = {data}/>
        <button  >submit</button>
        <div>name:  {value}</div>
      
    </div>
  )
}

export default LocalStorage
