import React from 'react'

const User = (props) => {
  return (
    <div>
      <h1>UserComponent</h1>
      <button onClick={props.data}>clickHere</button>
      
    </div>
  )
}

export default User
