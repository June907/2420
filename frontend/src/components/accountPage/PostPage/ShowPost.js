import React,{ useState, useEffect } from "react";
import axios from "../LoginPage/axios";
import Post from "./Post";
export default function ShowPost(){
  const showPost_url='/posts/show';
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  
  const tags=["AAPL"];
  const[p, setP] = useState([]);

  useEffect(() =>{
    axios.post(showPost_url, JSON.stringify({tags}),{
      headers: {'Content-Type':'application/json' },
      withCredentials:true})
    .then(res=>{
      console.log(res);
      var posts=[];
      for(var post in res.data.posts){
        posts.push(res.data.posts[post]);
      }
      setP(posts)
    })
  }, [])

  return p.map((obj) => {
    console.log(p.length)
    return <Post obj={obj}></Post>
  })
}



// {posts.map((post) => {
      //   return {post};
      // })}

