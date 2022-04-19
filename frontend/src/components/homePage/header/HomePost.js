import React,{ useState, useEffect } from "react";
import axios from "../../accountPage/LoginPage/axios";
import Post from "./Post";
import "./HomePost.css";
import GlobalAPI from "../../accountPage/GlobalAPI";
export default function HomePost(props){
  const showPost_url='/posts/show';

   const [tags,setTags]=useState([props.symbol]);
   const[p, setP] = useState([]);
   

   
   const fetchdata = async ()=>{
    setTags(()=> [props.symbol]);
    console.log(tags);
    const res= await GlobalAPI(false,showPost_url, JSON.stringify({tags}));
      
    
    console.log(res);
    var posts=[];
    for(var post in res.data.posts){
      posts.push(res.data.posts[post]);
    }
    setP([""]);
    setP(posts);

   }
  useEffect(() =>{
    fetchdata();
  }, [props.isClick])

  return p.map((obj) => {
    console.log(p.length)
    return <Post obj={obj}></Post>

  })
}