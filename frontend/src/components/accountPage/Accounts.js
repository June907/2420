import React from "react";
import GoogleAPILogin from "./GoogleAPILogin";
import GoogleAPILogout from "./GoogleAPILogout";
import Signup from "./Signup";

export default function Accounts(){
  return(

    <div>
      <h1>This is an account page</h1>
      <GoogleAPILogin/>
      <GoogleAPILogout/>
      <Signup/>
      
    </div>
  )

  
}