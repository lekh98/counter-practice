import React from 'react'
import User from './User'

const Memebers = () => {
    const getData = ()=>{
        alert('hey you can passfunction as a props')
      }
  return (
    <div>
        <User data={getData}/>
      
    </div>
  )
}

export default Memebers
