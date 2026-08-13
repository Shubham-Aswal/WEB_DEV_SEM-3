import React from 'react'

const App = () => {
  let [count, setCount] = React.useState(0)


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        increment
      </button>
      <button onClick={() => setCount(count - 1) }>
        decrement
      </button>
      <button onClick={() => setCount(0)}>
        reset
      </button> 
    </div>
  )
}

export default App
