import React, { useState } from "react";

async function loginUser(credentials){
  return fetch("https://2for20.pythonanywhere.com/api/users/token",{
    method:"POST",
    headers:{
      'Origin':'http://localhost:8000',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(credentials),
    credentials: 'include'  
  })
    .then(data=>data.json())

}


export default function Login(){
  
  
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    await loginUser({

      
      "email":email,
      "password":password
    });
    
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

