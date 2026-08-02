import React ,{useState}from 'react'
import StudentList from './StudentList.jsx'

import {Routes,Route} from 'react-router-dom'
import StudentDetails from './StudentDetails.jsx'
const App = () => {
  const [arry,setArry] = useState([{"id" :1,"name":"shubham","marks":80},{"id":2,"name":"aswal","marks":85},{"id":3,"name":"stark","marks":90},{"id":4,"name":"arc","marks":95}])
  return (
    <div>
      <Routes>
        <Route path='/' element={<StudentList arry={arry}/>}/>
        <Route path='/student/:id' element={<StudentDetails/>}/>
      </Routes>
      
    </div>
  )
}

export default App
