import Signup from "./Signup";
import Login from './Login'
import './app.css'
import React from "react";

function App() {
  const [isSignup,setisSignup] = React.useState(true)
  const change = () =>{
    setisSignup(!isSignup)
  }
  
  return (
    <div className="App">
     
    

      {isSignup? <Signup change={change} />:  <Login change={change} />}
    </div>
  );
}

export default App;
