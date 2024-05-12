import React, { useState } from 'react'
import './Input.css'

const Input = () => {
  const [data,setData] = useState(null)
  const [print,setPrint] = useState(false)
  const setValue = (event)=>{
    console.log(event.target.value)
    setData(event.target.value)
    setPrint(false)
  }
  const [status,setStatus] = useState(true);
  
  return (
    <div className='input'>
      {
        print?<h1>{data}</h1>:null
      }
      
      <input type="text" onChange={setValue}/>
      <button onClick={()=>setPrint(true)}>PrintData</button>

      <div className="toggle">
        {status?<h2>Hello world</h2>:""}
        
        {/*<button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button>*/}
        <button onClick={()=>{setStatus(!status)}}>toggle</button>
      </div>
    </div>
  )
}

export default Input
