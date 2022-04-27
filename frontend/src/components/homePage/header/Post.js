import React from "react";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Favorite,
  Publish,
  Repeat,
} from "@material-ui/icons";

import "./Post.css";
import GlobalAPI from "../../accountPage/GlobalAPI";
import { useNavigate, useLocation } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
export default function Post(props) {

  const navigate = useNavigate();

  const get_id = (user) => {
    console.log(props.obj);
    if (user === undefined || user === null) {
      console.log("undefined 0");
      return 0;
    }
    console.log(user.id);
    return user.id;
  }

  const handleLike = async () => {
    if (props.user !== undefined) {
      const response = await GlobalAPI(false, '/posts/like', { post: props.obj.id });
      console.log(response.data);
      props.changePost(response.data.post, props.id);
      console.log(props.obj);
    }
    else {
      navigate("/login");
    }
  }

  return (
    <div>
      <div className="post">
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3 className="text-light">
                <span className="post__headerSpecial" style={{ color: 'white' }}>
                  <Link style={{ color: 'white' }} to={"/profile/" + props.obj.user.username}>{props.obj.user.username}</Link>
                </span>
                <span className="post__headerSpecial">
                  &nbsp;{props.obj.posted_at}
                </span>
                <span className="post__headerSpecial" >
                  &nbsp;<Link style={{ color: 'rgb(0,128,0)' }} to={"/" + props.obj.tags[0]}>{props.obj.tags}</Link>
                </span>

              </h3>
            </div>
            <div className="post__headerDescription text-light">
              <p>{props.obj.content}</p>
            </div>
          </div>
          {/* <img src={image} alt="" /> */}
          <div className="post__footer text-light">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            {props.obj.likes.includes(get_id(props.user))
              ?
              <a onClick={handleLike}>{props.obj.likes.length} <Favorite fontSize="small" /></a>
              :
              <a onClick={handleLike}>{props.obj.likes.length} <FavoriteBorder fontSize="small" /></a>
            }
            <Publish fontSize="small" />
          </div>
        </div>
      </div>


    </div >)
}