import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "./axios";




export default function Signup(){
  const[userName,setUserName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[fName,setfName]=useState("");
  const[lName,setlName]=useState("");
  const signup_url='/register';
  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const response= await axios.post(signup_url,JSON.stringify({Username: userName, Email:email,
      Passowrd:password,Firstname:fName,Lastname:lName}),
        {
          headers: {'Access-Control-Allow-Origin':'http://localhost:3000/','Content-Type':'application/json', },
          withCredentials:true


        }
      );
      setUserName("");
      setEmail("");
      setPassword("");
      setfName("");
      setlName("");
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
        <button>Submit</button>
        <p className="text-light pCenter">Already have an account? Click here to <Link to="/login">Log in </Link></p>

      </form>




    </div>

  )

}