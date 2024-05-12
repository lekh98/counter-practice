import React from 'react'
import { useState } from 'react'

const Condition = () => {
    const [loggedIn,setLoggedIn] = useState(2)
  return (
    <div>
        {
            loggedIn ===1?<h1>logged in</h1>:loggedIn ===2?<h1>not looged in</h1>:<h1>never ever looged in</h1>
        }
      
    </div>
  )
}

export default Condition
