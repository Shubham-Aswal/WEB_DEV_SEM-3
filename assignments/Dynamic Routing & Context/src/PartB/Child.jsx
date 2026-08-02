import React from 'react'
import {useContext} from 'react'
import {Context} from '../Context.js'
const Child = () => {
    let val = useContext(Context)
  return (
    <div>
        <h1>Current theme : {val}</h1>
      
    </div>
  )
}

export default Child
