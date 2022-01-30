import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup(){
  
  const[userInfo,setUserInfo]=useState({
    fName:"",
    lName:"",
    email:"",
    password:""


  });

  function handleChange(event){
    const{name,value}=event.target;

    setUserInfo((prevValue)=>{
      return{
        ...prevValue,
        [name]:value
      };

      }
    )

    

  }

  
  return(
    <div>
      <h1 className="center">Sign Up as {userInfo.fName} {userInfo.lName}</h1>
      <p className="text-light pCenter">{userInfo.email}</p>
      
      

      <form>
        <input
          className="signup-input"
          onChange={handleChange}
          type="text"
          name="fName"
          value={userInfo.fName}
          placeholder="First Name"
          maxLength="50"


        />
        <input
          className="signup-input"
          onChange={handleChange}
          type="text"
          name="lName"
          value={userInfo.lName}
          placeholder="Last Name"
          maxLength="50"

        />
        <input
          className="signup-input"
          onChange={handleChange}
          type="text"
          name="email"
          value={userInfo.email}
          placeholder="Email"

        />
        <input
          className="signup-input"
          onChange={handleChange}
          type="password"
          name="password"
          value={userInfo.password}
          placeholder="Password"


          
        />
        <p className="text-light pCenter">Already have an account? Click here to <Link to="/login">Log in </Link></p>

      </form>



    </div>

  )

}