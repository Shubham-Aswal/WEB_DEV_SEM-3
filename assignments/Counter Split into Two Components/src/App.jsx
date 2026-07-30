import React from 'react'
import Display from './Display'
import './App.css'
const App = () => {
  let [count, setCount] = React.useState(0)
  return (
    <div className='App'>
      <Display count = {count} setCount = {setCount}/>

    </div>
    
  )
}

export default App
