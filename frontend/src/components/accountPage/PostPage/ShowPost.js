import React,{ useState, useEffect } from "react";
import axios from "../LoginPage/axios";
import Post from "./Post";
import "./ShowPost.css";
import GlobalAPI from "../GlobalAPI";
export default function ShowPost(props){
  const showPost_url='/posts/show';

   const [tags,setTags]=useState([props.name]);
   const[p, setP] = useState([]);
   

  useEffect(() =>{
    (async ()=>{
    setTags([props.name]);
    const res= await GlobalAPI(false,showPost_url, JSON.stringify({tags}));
    console.log(res);
    var posts=[];
    for(var post in res.data.posts){
      posts.push(res.data.posts[post]);
    }
      setP([""]);
      setP(posts);
    })();
  }, [props.isClick])

  return p.map((obj) => {
    console.log(p.length)
    return <Post obj={obj}></Post>

  })
}

