import React, { useState } from 'react'
//mkaing todo application 
const Todo = () => {
  const [data, setData] = useState('')
  const [arry, setArr] = useState([])

  const handleAddTodo = () => {
    const trimmedData = data.trim()

    if (!trimmedData) return

    setArr((prev) => [...prev, trimmedData])
    setData('')
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setData(e.target.value)}
        value={data}
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {arry.map((dt, idx) => (
          <li key={`todo-${idx}`}>{dt}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
