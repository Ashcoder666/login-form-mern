import React from 'react'

const Homepage = ({logUser,logout}) => {
  
  return (
    <div>
      <h1>Hello {logUser} <br /> you are succesfully logged in</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Homepage
