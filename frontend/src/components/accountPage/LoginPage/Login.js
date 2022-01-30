import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Login(){
  
  const[userInfo,setUserInfo]=useState({
 
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
      
      <h1 className="center">Login</h1>
      <form>
        
        <input
          className="signup-input"
          onChange={handleChange}
          type="text"
          name="email"
          value={userInfo.email}
          placeholder="Email Adress"

        />
        <input
          className="signup-input"
          onChange={handleChange}
          type="password"
          name="password"
          value={userInfo.password}
          placeholder="Password"


          
        />
       

      </form>



    </div>
  )

}