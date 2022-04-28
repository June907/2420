import React from "react";
import "./analytics.css";
import Blocks from './blocks.js';
export default function About(){
  return(
  <div className = "container">
  <h1 style={{textAlign: "center", padding: "0"}}>PowerBI Analytics</h1>  
  <div className = "report">
    <iframe title="The Stock App - Overview" width="1280" height="800" src="https://app.powerbi.com/view?r=eyJrIjoiMGVkN2ZmYWQtNmIxNi00NDAyLTkzNjUtODI2ODgwODEyNDZjIiwidCI6ImI0ZGNlMjdjLWQwODgtNDQ1NC05OTY1LTJiNTlhMjNlYTE3MSIsImMiOjZ9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
  </div>
  </div>)
}