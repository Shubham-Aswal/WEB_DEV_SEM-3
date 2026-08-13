import React, { useReducer } from 'react'

const Todo2 = () => {

  const data ={
    input : "",
    list : []
  }
  function reducer(state,action){
    if(action.type == "inp"){
      return {
        ...state,
        input : action.payload
      }
    }
    else if(action.type == "add"){
      return {
        ...state,
        list : [...state.list,state.input],
        input : ""

      }
    }
    else if(action.type == "d"){
      return {
        ...state,
        list : state.list.filter((val,idx)=>idx != action.payload)
      }
    
    }
    else {
      return state;
    }
  }
   const [state,dispatch] = useReducer(reducer,data);

  return (
    <div>
      <input onChange={(e)=>dispatch({type : "inp" ,payload : e.target.value})}  />
      <button onClick={()=>dispatch({type : "add"})}>add</button>
      <div>
        {
          state.list.map((val,idx)=>{
            return (
              <div onClick={()=>dispatch({type :"d",payload : idx})}>{val}</div>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Todo2
