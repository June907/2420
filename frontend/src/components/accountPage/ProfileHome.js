import React, { useEffect, useState } from "react";
import Sidebar from "./FeedPage/Sidebar/Sidebar";
import "./ProfileHome.css";
import axios from "./LoginPage/axios";
export default function ProfileHome(){
  const base_url='https://twofortwenty-dev.us-west-2.elasticbeanstalk.com/api/users/current'
  const user_url='/current'
  const [users,setUser]=useState("")

  axios.get(user_url)
  .then(res=>{
    console.log(res);
    setUser(res.data.user.username);
  })


  return(

    <div className="container main-layout">
      <Sidebar/>
      <h1>Hello {users}</h1>


    </div>
  )

}