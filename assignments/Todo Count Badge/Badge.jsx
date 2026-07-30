import React from 'react'
import "./badge.css"
const Badge = ({arry}) => {
  return (
    <div className='badge'>
        <h2> Total  : {arry.length}</h2>
        <div>
            <ul>
                {
                    arry.map((item,idx)=>{
                        return (
                            <li key ={`li-${idx}`}>{item}</li>
                        )
                    })
                }
            </ul>
        
        </div>
    </div>
  )
}

export default Badge
