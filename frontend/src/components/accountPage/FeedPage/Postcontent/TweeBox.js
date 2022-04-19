import React, { useState } from "react";
import axios from "../../LoginPage/axios";
import {Button, TextField} from "@material-ui/core";
import "./TweetBox.css";
import GlobalAPI from "../../GlobalAPI";
import Ticker from "./Ticker";

export default function FeedBox(props){
  const post_url='/posts/create';
  const[content,setContent]=useState("");
  const[title,setTitle]=useState("");
  const[tags,setTag]=useState([""]);
  const handleSubmit= async e=>{
    e.preventDefault();
    try{
      console.log(content);
      
      const response=await GlobalAPI(false,post_url,JSON.stringify({title:title,content:content,tags:tags,has_posted:true}));
      props.handleChangePosts(response.data.posts);
      console.log(tags);
      console.log(response?.data);


    }catch(err){
      console.log(err);
    }

  }
function handleChangeTag(e) {
  setTag([e]);
}
  return(
    <div className="tweetBox">
      <form>
        
        <TextField fullWidth label="What's happening?" id="fullWidth" style={{backgroundColor:"white"}}
            value={content}
            onChange={(e) => {setContent(e.target.value)}}
            placeholder="What's happening?"
            type="text"
        />
        {/* <input
            value={tags}
            onChange={(e) => {setTag(e.target.value)}}
            placeholder="Tag: "
            type="text"
        /> */}
        <Ticker
          handleChange={handleChangeTag}
          value={tags}
        />
        {/* <input
          placeholder="Optional: Enter image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          className="tweetBox__imageInput"
        /> */}
        <Button onClick={handleSubmit} type="submit" className="tweetBox__button">
          Send
        </Button>
      </form>
    </div>
  )
}


