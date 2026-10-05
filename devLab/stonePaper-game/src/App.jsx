import React, { useReducer } from 'react'
import "./App.css"
const App = () => {

  function reducer (state,action){
    if(action.type == "play"){
      let player = action.payload;
      console.log(player)

    
    let arr = ["rock","paper","scissor"]
    let computer = arr[Math.floor(Math.random() * 3)]
    console.log(computer)

    let result = ""
    if((player === "rock" && computer == "scissor") || (player == "paper" && computer == "rock") || (player == "scissor" && computer == "paper")){

          result = "you win"
    }
    else if(player == computer){
      result = "draw"
      
    }
    else{
        result = "you loose ,looser"
    }
    console.log(`result ${result}`)
    return {
      userchoice : player,
      computerchoice : computer,
      result

    }
  }




  }
  let initialstate = {
    userchoice : " ",
    computerchoice : " ",
    result : " "
  }
  const [state,dispatch] = useReducer(reducer,initialstate)
  return (
    <div className='page'>
        <div className='card'>
          <div className='choice-box'>
            <button onClick={()=>{dispatch({type : "play",payload : "rock"})}}>rock</button>
            <button onClick={()=>{dispatch({type : "play",payload : "paper"})}}>paper</button>
            <button onClick={()=>{dispatch({type : "play",payload : "scissor"})}}>scissor</button>

          </div>
          <div className='result-box'>
            
              <h3>your choice : {state.userchoice}</h3>
              <h3>computerchoice : {state.computerchoice}</h3>
              <h2>result : {state.result}</h2>
            
          </div>
          </div>      
    </div>
  )
}

export default App
