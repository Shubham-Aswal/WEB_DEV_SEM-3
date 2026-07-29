import React, { useState } from 'react'
import Card from './card'
const App = () => {
  let [arry,setArr] = useState([]);
  let [name,setName] = useState("");
  let [rollNO,setNo] = useState("");
   let [cr,setCr] = useState("");
  return (
    <div className='inpForm'>
      <form onSubmit={(e)=>{e.preventDefault()
        if(!name || !rollNO || !cr){
          return alert("field is missing !")
        }
        setArr([...arry,{name,rollNO,cr}])
        setName("")
        setCr("")
        setNo("")
      }}>
        <label htmlFor="nme"  >Name :</label>
        <input type="text" className='nme' onChange={(e)=>{setName(e.target.value)}} value = {name} />
        <label htmlFor="rn">RollNO :</label>
        <input type="text" className='rn' onChange={(e)=>{setNo(e.target.value)}} value = {rollNO}/>
        <label htmlFor="cr">Course:</label>
        <input type="text" className='cr' onChange={(e)=>{setCr(e.target.value)}} value = {cr} />
        <button type="submit">submit</button>


      </form>

     <Card arr ={arry}/>
    </div>
   
  )
}

export default App