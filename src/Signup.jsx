import React from 'react'
import axios from 'axios';

const Signup = ({change}) => {
    const [un,setUn] = React.useState('');
    const [pass,setPass] = React.useState('');
    const save =() =>{
        axios.post('http://localhost:3001/signup',{username:un,password:pass}).then(()=>alert("account created"))
    }
  return (
    <div className='signup-body'>
     <h1>Register your account</h1>
     <input type="text" placeholder='username' onChange={(e)=>{setUn(e.target.value)}} />
     <input type="text" placeholder='password' onChange={(e)=>{setPass(e.target.value)}}/>
     <button onClick={save}>Register</button>
     <p>Already have an account <b className='mm' onClick={change}>click here</b></p>
    </div>
  )
}

export default Signup
