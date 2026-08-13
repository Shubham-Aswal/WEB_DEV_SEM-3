import React,{useReducer} from 'react'

const App = () => {
  function reducer(state,action){
    if(action.type === "increment"){return state + 1}
    else if(action.type === "decrement"){return state -1}
    else if(action.type ===  "reset") { return 0}
    else{ return state}
  }
  const [state,dispatch] =useReducer(reducer,0)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick = {()=>dispatch({type:"increment"})}>increment</button>
      <button onClick = {()=>dispatch({type:"decrement"})}>decrement</button>
      <button onClick = {()=>dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

export default App
