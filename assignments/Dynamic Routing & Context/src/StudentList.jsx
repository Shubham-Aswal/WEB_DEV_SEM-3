import React from 'react'
import {useNavigate} from 'react-router-dom'
const StudentList = ({arry}) => {
    const nav = useNavigate()
  return (
    <div>
        <h1>Student List</h1>
        <ul>
            {
                arry.map((item)=>{
                    return <li key={item.id} onClick={()=>nav(`/student/${item.id}`)}>{item.name}</li>
                })
            }
        </ul>
      
    </div>
  )
}

export default StudentList
