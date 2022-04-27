
import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "../../../homePage/header/Post";
import FeedBox from "./TweeBox";
import axios from "../../LoginPage/axios";
import GlobalAPI from "../../GlobalAPI";

function Feed(props) {

  // function handleChangePosts(posts) {
  //   setP(posts);
  // }
  // const user_url = '/users/current'
  // const [users, setUser] = useState("")

  const showPost_url = '/posts/show-user';
  const [p, setP] = useState([]);
  const [update, setUpdate] = useState(false);
  // axios.get(user_url)
  //   .then(res => {
  //     console.log(res);
  //     setUser(res.data.user.username);
  //   })

  const changePost = (post, i) => {
    p[i] = post;
    setUpdate(!update);
  }

  useEffect(() => {

    (async () => {
      console.log(props.username);
      const res = await GlobalAPI(false, showPost_url, JSON.stringify({ user: props.username }));
      console.log(res);
      var posts = [];
      for (var post in res.data.posts) {
        posts.push(res.data.posts[post]);
      }
      setP(posts);
    })();
  }, [props.username])

  const mapping = () => {
    let list = [<br></br>,<h3 style={{ padding: "0", textAlign: "center" }} className="text-light">Posts by {props.username}</h3>];
    if (p.length > 0 && p[0] != "") {
      p.map((obj, i, arr) => {
        console.log(props.symbol, props.update);
        console.log(p[0]);
        list.push(<Post update={update} key={i} obj={obj} user={props.user} changePost={changePost} id={i}></Post>);
      })
      return list;
    }
    return (
      <div>
        <br></br>
         <h3 className="text">No posts to show for {props.username}.</h3>;
      </div>
    );
  }

  return mapping();
}

export default Feed;