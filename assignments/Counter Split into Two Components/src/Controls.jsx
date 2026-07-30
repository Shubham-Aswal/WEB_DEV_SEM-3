import React from 'react'

const Controls = ({count,setCount}) => {
  return (
    <div>
        <button onClick = {()=>{setCount(count + 1)}}>Increment</button>
        <button onClick = {()=>{setCount(count - 1)}}>Decrement</button>
    </div>
  )
}

export default Controls
