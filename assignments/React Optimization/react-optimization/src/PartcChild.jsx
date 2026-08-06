import React,{memo} from 'react'

const PartcChild = () => {
   console.log("child - rendered")
  return (
    <div>
     
    </div>
  )
}

export default memo(PartcChild)
