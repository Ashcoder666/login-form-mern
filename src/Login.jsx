import React from 'react'

const Login = ({change}) => {
  return (
    <div className='signup-body'>
    <h1>Login Into Your Account</h1>
    <input type="text" placeholder='username' />
    <input type="text" placeholder='password' />
    <button>Login</button>
    <p>Dont have an account <b className='mm' onClick={change}>click here</b></p>
   </div>
  )
}

export default Login
