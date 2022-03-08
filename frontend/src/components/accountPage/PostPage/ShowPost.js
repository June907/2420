import React from "react";
import axios from "../LoginPage/axios";
export default function showPost(props){
  const showPost_url='/posts/show';
  const[ticker,setTicker]=("AAPL");

  axios({url:showPost_url, method:'get', data:{ticker:ticker}})
  .then(res=>{
    console.log(res);
    
  })





}