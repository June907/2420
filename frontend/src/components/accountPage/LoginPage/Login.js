
import React, { useState } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import axios from "./axios";
import ProtectedRoute from "./ProtectedRoute";
import { Auth } from "./Auth";


export default function Login(){
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");
  //const{setAuth}=Auth();
  const[auth, setAuth]=useState(false);
  //const location = useLocation();
  //const from = location.state?.from?.pathname || "/";
  const login_url='/token'
  const navigate=useNavigate()
  const handleSubmit = async e => {
    e.preventDefault();
    try{
      const response= await axios.post(login_url,JSON.stringify({email,password}),
        {
          headers: {'Access-Control-Allow-Origin':'http://localhost:8000/','Content-Type':'application/json', },
          withCredentials:true


        }
      );

      
      //setAuth({user:true});
      setEmail("");
      setPassword("");
      setAuth(true);
      //navigate(from, { replace: true });
      console.log(response?.data);
      localStorage.setItem("isAuth","true");
      const isAuth=localStorage.getItem("isAuth");
      console.log(isAuth);
      //<ProtectedRoute isAuth={auth}/>
      navigate("/profile");
      




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

