
import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "../../../homePage/header/Post";
import FeedBox from "./TweeBox";
import axios from "../../LoginPage/axios";
import GlobalAPI from "../../GlobalAPI";

function Feed(props) {

  // function handleChangePosts(posts) {
  //   setP(posts);
  // }
  // const user_url = '/users/current'
  // const [users, setUser] = useState("")

  const showPost_url = '/posts/show-user';
  const [p, setP] = useState([]);
  // axios.get(user_url)
  //   .then(res => {
  //     console.log(res);
  //     setUser(res.data.user.username);
  //   })

  useEffect(() => {

    (async () => {
      console.log(props.username);
      const res = await GlobalAPI(false, showPost_url, JSON.stringify({ user: props.username }));
      console.log(res);
      var posts = [];
      for (var post in res.data.posts) {
        posts.push(res.data.posts[post]);
      }
      setP(posts);
    })();
  }, [props.username])

  return (
    <div className="feed" style={{ border: "1px solid black" }}>
      <div className="feed__header">
        <h1 style={{ padding: "0" }} className="text-light">Posts by {props.username}</h1>
      </div>
      {/* <FeedBox handleChangePosts={handleChangePosts} /> */}
      {p.map((obj) => {
        console.log(p.length)
        return <Post obj={obj}></Post>
      })}

    </div>
  );
}

export default Feed;