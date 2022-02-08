import React, { useState } from "react";
import axios from "./axios";



export default function Login(){
  
  
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");
  const login_url='/token'
  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const response= await axios.post(login_url,JSON.stringify({email,password}),
        {
          headers: {'Access-Control-Allow-Origin':'http://localhost:3000/','Content-Type':'application/json', },
          withCredentials:true
          

        }
      );
      setEmail("");
      setPassword("");


  }catch(err){
    console.log(err);


  }
    
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