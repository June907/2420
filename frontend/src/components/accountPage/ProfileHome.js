import React, { useEffect, useState } from "react";
import Sidebar from "./FeedPage/Sidebar/Sidebar";
import "./ProfileHome.css";
import axios from "./LoginPage/axios";
import FeedBox from "./FeedPage/Postcontent/TweeBox";
import Feed from "./FeedPage/Postcontent/Feed";
import Widgets from "./FeedPage/widget/widget";
import GlobalAPI from "./GlobalAPI";
import { useParams } from 'react-router-dom';
import CheckAuth from '../accountPage/CheckAuth';

export default function ProfileHome() {
  const base_url = 'https://twofortwenty-dev.us-west-2.elasticbeanstalk.com/api/users/current';
  const user_url = '/users/current';
  const [users, setUser] = useState("");
  const { username } = useParams();
  const [auth, changeAuth] = useState(false);
  const [user, changeUser] = useState(null);

  const fetchdata = async () => {
    const [val, user] = await CheckAuth();
    changeAuth(val);
    changeUser(user);
  }

  useEffect(() => {
    fetchdata();
    console.log(auth);
  }, []);

  // GlobalAPI(true, user_url)
  //   .then(res => {
  //     console.log(res);
  //     setUser(res.data.user.username);
  //   })

  return (

    <div style={{ width: "30%", margin: "auto"}}>
      {/* <Sidebar /> */}
      <Feed user={user} username={username}></Feed>
      {/* <Widgets></Widgets> */}

    </div>
  )

}