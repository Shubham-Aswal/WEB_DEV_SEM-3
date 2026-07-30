import React from 'react'
import Controls from './Controls'
const Display = ({count,setCount}) => {
  return (
    <div>
          <h1>Counter : {count}</h1> 
          <Controls count ={count} setCount = {setCount}/>
    </div>
  )
}

export default Display
