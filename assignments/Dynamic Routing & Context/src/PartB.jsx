import React from 'react'
import Parent from './PartB/Parent.jsx'
import { Context } from './Context.js'

const PartB = () => {
  return (
    <Context.Provider value="dark">
      <Parent />
    </Context.Provider>
  )
}

export default PartB
