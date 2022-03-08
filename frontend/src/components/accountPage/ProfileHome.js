import React, { useEffect, useState } from "react";
import Sidebar from "./FeedPage/Sidebar/Sidebar";
import "./ProfileHome.css";
import axios from "./LoginPage/axios";
import FeedBox from "./FeedPage/Postcontent/TweeBox";
import Feed from "./FeedPage/Postcontent/Feed";
import Widgets from "./FeedPage/widget/widget";
export default function ProfileHome(){
  const base_url='https://twofortwenty-dev.us-west-2.elasticbeanstalk.com/api/users/current'
  const user_url='/users/current'
  const [users,setUser]=useState("")

  axios.get(user_url)
  .then(res=>{
    console.log(res);
    setUser(res.data.user.username);
  })

  return(

    <div className="container main-layout">
      <Sidebar/>
      <Feed></Feed>
      <Widgets></Widgets>

    </div>
  )

}