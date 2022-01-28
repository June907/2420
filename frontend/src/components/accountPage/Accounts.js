import React from "react";
import GoogleAPILogin from "./GoogleAPILogin";
import GoogleAPILogout from "./GoogleAPILogout";
import Signup from "./Signup";

export default function Accounts(){
  return(

    <div className="container">
      <h1 className="center">Sign Up</h1>
      <br/>
      
      <Signup/>
      <GoogleAPILogin/>
      <GoogleAPILogout/>
      
    </div>
  )

  
}