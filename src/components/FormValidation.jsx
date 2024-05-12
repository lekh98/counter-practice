import React, { useState } from 'react'

const FormValidation = () => {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [userErr,setUserErr] = useState(false);
    const [passErr,setPassErr] = useState(false)
    const formSubmit = (event)=>{
        if(userName.length<3 || password.length<8){
            alert('provide some valid information')
        }
        else{
            alert('mission succesful')
        }
        event.preventDefault();
    }
    
    const useHandler = (event)=>{
        let item = event.target.value;
        if(item.length<3){
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        setUserName(item)
    }
    const passwordHandler = (event)=>{
        let item =event.target.value;
        if(item.length<8){
            setPassErr(true)
        }
        else{
            setPassErr(false)
        }
        setPassword(item)
    }
  return (
    
    <div>
        <h1>Login</h1>
        <hr />
        <form onSubmit={formSubmit}>
            <h2>UserName</h2><input type="text" onChange={useHandler}/>{userErr?<span>not valid user</span>:""}
            <h2>Password</h2><input type="paswword" onChange={passwordHandler} />{passErr?<span>provide strong password</span>:""}
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default FormValidation
