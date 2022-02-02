import React from "react";
import GoogleAPILogin from "./GoogleAPILogin";
import Login from "./Login";

export default function LoginPage(){
  return(
    <div className="container">
      
      <Login></Login>
      <GoogleAPILogin></GoogleAPILogin>


    </div>

  )
    
}