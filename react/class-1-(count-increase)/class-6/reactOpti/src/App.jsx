import React, { useCallback, useState } from 'react'
import Child from './Child';

const App = () => {
  let [count,setC] = useState(0);
  let demo = ()=>{
    console.log("hello world")
  }
  let obj = {
    id :1,
    name : "lol"
  }
  localStorage.setItem("key",JSON.stringify(obj))
  let fun = useCallback(demo,[])
  return (
    <div>
      <Child ct = {fun}/>
      <div>{count}</div>
      <button onClick={()=>{setC(count+1)}}>add</button>
    </div>
  )
}

export default App
