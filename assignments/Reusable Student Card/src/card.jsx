import React from 'react'
import "./card.css"
const Card = (props) => {
    let  {arr} = props;

  return (
    <div className = "main">
        {
            arr.map((data,idx)=>{
               let  {name,rollNO,cr} = data;
               return (
                <div className = "card" key = {`card-${idx}`}>
                        <h3>Name : {name}</h3>
                        <h3>rollNo : {rollNO}</h3>
                        <h3>Course : {cr} </h3>
                </div>
               )  
            })


        }
    </div>
  )
}

export default Card