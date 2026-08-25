import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
const App = () => {
  // useEffect(()=>{
  //   fetch("http://localhost:3000/").then((res)=>res.json()).then((data)=>{console.log(data)})
  // },[])
  async function apiCall(){

    let res = await axios.get("http://localhost:3000/")
    console.log(res.data)
  }
  apiCall()
  return (
    <div>
      app
      
    </div>
  )
}

export default App
