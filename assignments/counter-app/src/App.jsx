import React, { useState } from 'react'

const App = () => {
  const [count,setCount] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>{
        if(count < 10){
          setCount(count+1)
        }
        else{
          alert("limit reached !")
        }
      }}>increase</button>
      <button onClick={()=>{
        if(count > 0){
          setCount(count-1);
        }
        else{
          alert("limit reached !")
          
        }
      }}>decrease</button>

    </div>
  )
}

export default App