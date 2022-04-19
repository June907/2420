import React from "react";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
} from "@material-ui/icons";

import "./Post.css";
export default function Post(props){

  return(
  <div>
    <div className="post">
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3 className="text-light">
              {props.user}{" "}
              <span className="post__headerSpecial">
              {props.obj.user} {props.obj.posted_at}
                <span className="post__headerSpecial" style={{color:'red'}}>{props.obj.tags}</span>

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
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>


  </div>)
}


