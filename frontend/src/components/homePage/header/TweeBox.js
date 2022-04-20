import React, { useState } from "react";
import axios from "../../accountPage/LoginPage/axios";
import { Button, TextField } from "@material-ui/core";
import "./TweetBox.css";
import GlobalAPI from "../../accountPage/GlobalAPI";
import Ticker from "./Ticker";

export default function FeedBox(props) {
  const post_url = '/posts/create';
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  // const [tags, setTag] = useState([""]);
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      var t = [props.symbol];
      const response = await GlobalAPI(false, post_url, JSON.stringify({ title: title, content: content, tags: t, has_posted: true }));
      props.handleUpdate();
    } catch (err) {
      console.log(err);
    }
  }
  function handleChangeTag(e) {
    setTag([e]);
  }
  return (
    <div className="tweetBox">
      <form>

        <TextField fullWidth label="What's happening?" id="fullWidth" style={{ backgroundColor: "white" }}
          value={content}
          onChange={(e) => { setContent(e.target.value) }}
          placeholder="What's happening?"
          type="text"
        />
        <Button onClick={handleSubmit} type="submit" className="tweetBox__button">
          Send
        </Button>
      </form>
    </div>
  )
}


