import React,{useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const StudentDetails = () => {
    const [arry,setArry] = useState([{"id" :1,"name":"shubham","marks":80},{"id":2,"name":"aswal","marks":85},{"id":3,"name":"stark","marks":90},{"id":4,"name":"arc","marks":95}])
    const {id} = useParams()
    const nav = useNavigate()

    function getStudentDetails(id){
        let data = arry.find((item)=>item.id == id)
        if(!data){
            return(<>
            <h1>404 - Not Found</h1>
            <button onClick={()=>nav('/')}>Go Back</button>
        
            </> )
        }
        return(
            <div>
                <h1>Student Details</h1>
                <hr />
                <p>Name : {data.name}</p>
                <p>Marks : {data.marks}</p>
                <button onClick={()=>nav('/')}>Go Back</button>
            </div>
        )

    }
  return (
    <div>
     {getStudentDetails(id)}
      
    </div>
  )
}



export default StudentDetails
