import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../homePage/footer/Footer";


async function loginUser(credentials){
  return fetch("https://2for20.pythonanywhere.com/api/users/register",{
    method:"POST"
  })
}

export default function Signup(){
  const[userName,setUserName]=useState();
  const[password,setPassword]=useState();
  //const[fName,setfName]=useState();
  //const[lName,setlName]=useState();
  const[email,setEmail]=useState();





  return(
    <div>
      <h1 className="center">Sign Up </h1>


      <form>
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
        <button>Submit</button>
        <p className="text-light pCenter">Already have an account? Click here to <Link to="/login">Log in </Link></p>

      </form>




    </div>

  )

}