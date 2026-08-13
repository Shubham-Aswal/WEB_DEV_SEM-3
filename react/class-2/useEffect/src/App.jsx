import React,{useState,useEffect} from 'react'
import './App.css'
const App = () => {
  const [count, setCount] = React.useState(0);
  const [data,setData] = useState([])
  useEffect(()=>{
   let data =  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data)
      setData(data)
    })
    


  },[])
 
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>
        <h1> data</h1> <button onClick = {()=>{setData([])}}>clear data</button>
         <div className = "main-box">
        {
        
          data.map((item,id)=>{
            return (
              <div className = "box" key = {`item-${id}`}>
              <span key = {`item-id-${id}`}>{item.id}</span>
              <div key = {`item-title-${id}`}>{item.title}</div>  
              
              </div>
            )
          })
        
        }
        </div>
      </div>
    </div>
  )
}

export default App
