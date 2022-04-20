import React, { useState, useEffect } from "react";
import axios from "../../accountPage/LoginPage/axios";
import Post from "./Post";
import "./HomePost.css";
import GlobalAPI from "../../accountPage/GlobalAPI";
export default function HomePost(props) {
  const showPost_url = '/posts/show';

  const [tags, setTags] = useState([props.symbol]);
  const [p, setP] = useState([]);



  const fetchdata = async () => {
    // setTags([props.symbol]);
    var t = [props.symbol];
    console.log(t);
    const res = await GlobalAPI(false, showPost_url, JSON.stringify({ tags: t }));


    console.log(res);
    var posts = [];
    for (var post in res.data.posts) {
      posts.push(res.data.posts[post]);
    }
    setP([""]);
    setP(posts);

  }
  useEffect(() => {
    const fetch = async () => {
      await fetchdata();
    };
    fetch();
  }, [props.symbol])

  return p.map((obj, i, arr) => {
    console.log(props.symbol);
    return <Post key={i} obj={obj}></Post>
  })
}