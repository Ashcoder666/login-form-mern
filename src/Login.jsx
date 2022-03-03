import axios from 'axios';
import React from 'react'

const Login = ({change,authorize}) => {
  const [un,setUn] = React.useState('');
  const [pass,setPass] = React.useState('')
  const validate = async () =>{
    await axios.post('http://localhost:3001/login',{username:un,password:pass}).then((res)=>{
      if(res.data === "login succesful"){
          authorize(un)

      }else if(res.data === "user not found"){
          alert("user not found")
      }else if(res.data === "incorrect Password"){
          alert("incorrect password")
      }else{
         alert("some error occured try again")
      }
    })
  }
  return (
    <div className='signup-body'>
    <h1>Login Into Your Account</h1>
    <input type="text" placeholder='username' onChange={(e)=>{setUn(e.target.value)}} />
    <input type="text" placeholder='password' onChange={(e)=>{setPass(e.target.value)}}/>
    <button onClick={validate}>Login</button>
    <p>Dont have an account <b className='mm' onClick={change}>click here</b></p>
   </div>
  )
}

export default Login
