import React, { useState } from 'react'
import './Form.css'

const Form = () => {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [checkBox,setCheckBox] = useState(false)
  const [gender,setGender] = useState("")
  
  const formSubmit = (event)=>{
    event.preventDefault();
    console.log(firstName,lastName,email,password,checkBox,gender)
  }
 
  return (
    <>
      <div className="maincontainer">
        <div className="register-form">
          <h1>Registration from</h1>
          <form className='form-one' onSubmit={formSubmit} >
            <label htmlFor="first">FirstName:</label>
            <input type="text" name='first' placeholder='Enter Your Name' id='first' onChange={(event)=>{setFirstName(event.target.value)}} required/>
            <label htmlFor="first">LastName:</label>
            <input type="text" name='last' placeholder='Enter Your Name' id='last' onChange={(event)=>setLastName(event.target.value)} />
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' placeholder='Enter Your Name' id='email' onChange={(event)=>setEmail(event.target.value)} required/>
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' placeholder='Enter Your Name' id='password' onChange={(event)=>setPassword(event.target.value)} required/>
            <label htmlFor="chekbox">Accept terms and Condition</label>
            <input type="checkbox" name='checkbox' placeholder='Enter Your Name' id='checkbox' onChange={(event)=>setCheckBox(event.target.checked)} required/>
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender" onChange={(event)=>setGender(event.target.value)} required>
            <option value="male">male</option>
            <option value="female">female</option>
            </select>
            <button type='submit'>Submit</button>

          </form>
        </div>

      </div>
      
        
      
    </>
  )
}

export default Form
