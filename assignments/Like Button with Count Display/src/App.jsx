import React from 'react'
import LikeCount from './LikeCount'
import LikeButton from './LikeButton'
const App = () => {
  const [count,setCount] = React.useState(0)
  function handleLike(){
    setCount(count + 1);
  }
  return (
    <div>
      <LikeCount count={count} />
      < LikeButton handleLike={handleLike} />
    </div>
  )
}

export default App
