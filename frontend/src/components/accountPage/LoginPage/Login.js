
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "./axios";
import ProtectedRoute from "./ProtectedRoute";
import { Auth } from "./Auth";
import "./Login.css"
import GlobalAPI from "../GlobalAPI";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //const{setAuth}=Auth();
  const [auth, setAuth] = useState(false);
  //const location = useLocation();
  //const from = location.state?.from?.pathname || "/";
  const login_url = '/users/token';
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await GlobalAPI(false, login_url, JSON.stringify(({ email, password })));
      //setAuth({user:true});
      setEmail("");
      setPassword("");
      setAuth(true);
      //navigate(from, { replace: true });
      console.log(response?.data);
      if (response.status != 200) {
        alert(response.data.message);
      }
      else {
        navigate("/aapl");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <h1 style={{textAlign: "center", padding: 0}}>Login</h1>


      <form onSubmit={handleSubmit}>


        <input
          className="signup-input"
          onChange={e => setEmail(e.target.value)}
          type="text"
          name="email"
          value={email}
          placeholder="Email"

        />
        <input
          className="signup-input"
          onChange={e => setPassword(e.target.value)}
          type="password"
          name="password"
          value={password}
          placeholder="Password"



        />

        <button className="Loginbutton">Submit</button>

      </form>




    </div>
  )

}

