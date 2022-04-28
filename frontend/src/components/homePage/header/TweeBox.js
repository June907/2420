import React, { useState } from "react";
import axios from "../../accountPage/LoginPage/axios";
import { Button, TextField } from "@material-ui/core";
import "./TweetBox.css";
import GlobalAPI from "../../accountPage/GlobalAPI";
import Ticker from "./Ticker";
import "antd/dist/antd.css";

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
      setContent("");
      if (response.status != 200) {
        alert(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  }
  function handleChangeTag(e) {
    setTag([e]);
  }
  return (
    <div className="tweetBox">
      <div className="row">
        <form>
          <div className="col-1">
            <TextField label={"~    Write a post about " + props.symbol} className="text_field" id="fullWidth" style={{ backgroundColor: "white" }}
              value={content}
              onChange={(e) => { setContent(e.target.value) }}

              type="text"
            />
          </div>
          <div className="col-2">
            <Button onClick={handleSubmit} type="submit" className="tweetBox__button">
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}


