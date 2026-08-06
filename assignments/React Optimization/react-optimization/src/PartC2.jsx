import React, { useCallback ,useState} from 'react'

const PartC2 = () => {
    const [count,setC] = useState(0);
    const [step,setS] = useState(0);
    function increase(){
        setC(count+1)
        console.log("hello")
    }
    let fun =useCallback(increase,[])
  return (

    <div>
        <div>count : {count}</div>
        <button onClick={()=>setS(step+1)}>step</button>
    </div>
  )
}
// the step needs to be in the dependency arry because the function should only execute when value of step is changed 
export default PartC2
