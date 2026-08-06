import React, { useCallback, useState } from 'react'
import PartcChild from './PartcChild'
const PartC = () => {
   let [count,setC] = useState(0);
    function handleClick (){
        console.log("function - executed")

    }
    let fun = useCallback(handleClick,[])
  return (
    <div>
        <div>count : {count}</div>
        <button onClick={()=>{setC(count+1)}}>inc</button>
        <PartcChild fun = {fun}/>
      
    </div>
  )
}

export default PartC
