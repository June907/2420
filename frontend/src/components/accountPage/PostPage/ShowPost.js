import React,{ useState }  from "react";
import axios from "../LoginPage/axios";
import Post from "./Post";
import "./ShowPost.css";
export default function ShowPost(){
  const showPost_url='/posts/show';
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");
  const [user, setUser]=useState("");
  const [posts, setPosts]=useState([]);
  const tags=["AAPL"];

  axios.post(showPost_url, JSON.stringify({tags}),{
    headers: {'Content-Type':'application/json' },
    withCredentials:true})
  .then(res=>{
    console.log(res);
    setTitle(res.data.posts[0].title);
    setContent(res.data.posts[0].content);
    setUser(res.data.posts[0].user);

    // for(const post in res.data.posts){
    //   posts.push(post);
    // }
  })

  return(
    <div className="feed">
    <Post title={title}
      content={content}
      user={user}
      />


    </div>);
}