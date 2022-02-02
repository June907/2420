import React, { useState } from "react";
import PropTypes from "prop-types";
async function loginUser(credentials){
  return fetch("https://2for20.pythonanywhere.com/api/users/token",{
    method:"POST",
    headers:{
      'Origin':'http://localhost:3000',
      'Content-Type': 'application/json'

    },
    body:JSON.stringify(credentials)
  })
    .then(data=>data.json())

}


export default function Login({setToken}){
  
  
  const[password,setPassword]=useState();
  const[email,setEmail]=useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({

      
      "email":email,
      "password":password
    });
    setToken(token);
  }


  
  return(
    <div>
      <h1 className="center">Login</h1>
        
      

      <form onSubmit={handleSubmit}>


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
      </form>



    </div>
  )

}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};