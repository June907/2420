import React, { useState } from "react";
import axios from "../../LoginPage/axios";
import {Button, TextField} from "@material-ui/core";
import "./TweetBox.css";

export default function FeedBox(){

  const post_url='/posts/create';
  const[content,setContent]=useState("");
  const[title,setTitle]=useState("");
  const[tags,setTag]=useState([""]);
  const handleSubmit=async e=>{
    e.preventDefault();
    try{
      const response=await axios.post(post_url,JSON.stringify({title:title,content:content,tags:tags}),
        {
          headers: {'Content-Type':'application/json' },
          withCredentials:true


        }
      );
      setContent("");
      console.log(response?.data);

    }catch(err){
      console.log(err);
    }

  }

  return(
    <div className="tweetBox">
      <form>
        
        <TextField fullWidth label="What's happening?" id="fullWidth" style={{color:"white"}}>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            type="text"
          />

        </TextField>
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


