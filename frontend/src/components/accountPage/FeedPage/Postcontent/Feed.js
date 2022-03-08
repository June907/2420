
import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import FeedBox from "./TweeBox";
import axios from "../../LoginPage/axios";

function Feed() {
  const [posts, setPosts] = useState([]);

  const user_url='/users/current'
  const [users,setUser]=useState("")

  axios.get(user_url)
  .then(res=>{
    console.log(res);
    setUser(res.data.user.username);
  })

  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="text-light">Welcome back {users}</h2>
      </div>
      <FeedBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;