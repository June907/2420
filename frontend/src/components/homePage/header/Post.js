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
export default function Post(props) {

  const get_id = (user) => {
    if (user === undefined) {
      console.log("undefined 0");
      return 0;
    }
    console.log(user.id);
    return user.id;
  }

  const handleLike = async () => {
    const response = await GlobalAPI(false, '/posts/like', { post: props.obj.id });
    console.log(response.data);
    props.changePost(response.data.post, props.id);
    console.log(props.obj);
  }

  return (
    <div>
      <div className="post">
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3 className="text-light">
                <span className="post__headerSpecial" style={{ color: 'white' }}>
                  {props.obj.user}
                </span>
                <span className="post__headerSpecial">
                  &nbsp;{props.obj.posted_at}
                </span>
                <span className="post__headerSpecial" style={{ color: 'rgb(0,128,0)' }}>
                  &nbsp;{props.obj.tags}
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