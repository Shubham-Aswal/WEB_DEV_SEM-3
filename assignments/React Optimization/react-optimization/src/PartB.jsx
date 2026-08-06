import React, { useCallback, useMemo, useState } from 'react'

const PartB = () => {
    let names = ["shubham","happy","akash","gautam"]
    let [count,setC] = useState(0);
    let [val,setV] = useState("");

   let data = useMemo(()=>{

       console.log("data is filtered")
    return names.filter((dt)=>{return dt == val})
    
    },[val]) || [""]
  return (
    <div>
        <input type= "text" onChange= {(e)=>{setV(e.target.value)}}/>
        <div>filtered name : <ul>
            {

                data.map((dt,idx)=>{
                    return <li key ={`li-${idx}`}>{dt}</li>
                })
}</ul></div>
        <div>count : {count}</div>
        <button onClick={()=>setC(count+1)}>inc</button>
      
    </div>
  )
}

export default PartB
