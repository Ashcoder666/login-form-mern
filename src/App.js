import Signup from "./Signup";
import Login from './Login'
import './app.css'
import React from "react";
import Homepage from './Homepage'

function App() {
  const [isSignup,setisSignup] = React.useState(true)
  const [auth,setAuth] = React.useState(false)
  const [logUser,setLogUser] = React.useState('')
  const change = () =>{
    setisSignup(!isSignup)
  }
  const authorize = (username) =>{
    setAuth(true)
    setLogUser(username)
  }

  const logout = ()=> {
    setAuth(false)
    setLogUser('')
  }

  if(auth){
    return <Homepage logUser={logUser} logout={logout} />
  }
  else 
  return (
    <div className="App">
     

     {isSignup? <Signup change={change} />:  <Login change={change} authorize={authorize}/>}

    </div>
  );
}

export default App;
