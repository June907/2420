
import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import FeedBox from "./TweeBox";
import axios from "../../LoginPage/axios";
import GlobalAPI from "../../GlobalAPI";

function Feed() {
  

  const user_url='/users/current'
  const [users,setUser]=useState("")

  axios.get(user_url)
  .then(res=>{
    console.log(res);
    setUser(res.data.user.username);
  })
  const showPost_url='/posts/show-all';
  const[p, setP] = useState([]);
  

 useEffect(() =>{
   (async ()=>{
   const res= await GlobalAPI(false,showPost_url, JSON.stringify({}));
   console.log(res);
   var posts=[];
   for(var post in res.data.posts){
     posts.push(res.data.posts[post]);
   }
     setP(posts);
   })();
 }, [])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="text-light">Welcome back {users}</h2>
      </div>
      <FeedBox />
      {p.map((obj) => {
      console.log(p.length)
      return <Post obj={obj}></Post>
      })}

    </div>
  );
}

export default Feed;