import React, { useState } from "react";
import { Link } from "react-router-dom";
import GlobalAPI from "../GlobalAPI";
import axios from "./axios";




export default function Signup(){
  const[userName,setUserName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[fName,setfName]=useState("");
  const[lName,setlName]=useState("");
  const[company,setCompany]=useState("");
  const signup_url='users/register';
  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const response= await GlobalAPI(false,signup_url,JSON.stringify({username: userName, email:email,
      password:password,first_name:fName,last_name:lName, company:company}),
        {
          headers: {'Content-Type':'application/json', },
          withCredentials:true


        }
      );
      setUserName("");
      setEmail("");
      setPassword("");
      setfName("");
      setlName("");
      setCompany("");
    }catch(err){
      console.log(err);
    }
  }





  return(
    <div>
      <h1 className="center">Sign Up </h1>


      <form onSubmit={handleSubmit}>
      <input
          className="signup-input"
          onChange={e=>setUserName(e.target.value)}
          type="text"
          name="userName"
          value={userName}
          placeholder="User Name"
          maxLength="50"


        />


        <input
          className="signup-input"
          onChange={e=>setEmail(e.target.value)}
          type="text"
          name="email"
          value={email}
          placeholder="Email"

        />
        <input
          className="signup-input"
          onChange={e=>setPassword(e.target.value)}
          type="password"
          name="password"
          value={password}
          placeholder="Password"



        />
        <input
          className="signup-input"
          onChange={e=>setfName(e.target.value)}
          type="text"
          name="fistName"
          value={fName}
          placeholder="First Name"

        />
        <input
          className="signup-input"
          onChange={e=>setlName(e.target.value)}
          type="text"
          name="lastName"
          value={lName}
          placeholder="Last Name"

        />

        <input
          className="signup-input"
          onChange={e=>setCompany(e.target.value)}
          type="text"
          name="company"
          value={company}
          placeholder="Company Name"

        />
        <button className="Loginbutton">Submit</button>
        <p className="text-light pCenter">Already have an account? Click here to <Link to="/login">Log in </Link></p>

      </form>




    </div>

  )

}