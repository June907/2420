import React from "react";

export default function Post(props){

  return(
  <div>
    <h1>{props.obj.title}</h1>
    <h1>{props.obj.content}</h1>


  </div>)
}