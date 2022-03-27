import React,{ useState }  from "react";
import axios from "../LoginPage/axios";
import Post from "./Post";
export default function ShowPost(){
  const showPost_url='/posts/show';
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  var posts=[];
  const tags=["AAPL"];

  axios.post(showPost_url, JSON.stringify({tags}),{
    headers: {'Content-Type':'application/json' },
    withCredentials:true})
  .then(res=>{
    console.log(res);
    setTitle(res.data.posts[0].title);
    setContent(res.data.posts[0].content);
    // for(const post in res.data.posts){
    //   posts.push(post);
    // }
  })

  return(
    <div>
      <Post title={title}
      content={content}></Post>
    </div>);
}