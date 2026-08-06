import React,{memo} from 'react'

const ProfileCard = ({title,city}) => {
    console.log("child rendered")
  return (
    <div>
      <h3>title : {title}</h3>
      <h3>city : {city}</h3>
    </div>
  )
}

export default memo(ProfileCard)
