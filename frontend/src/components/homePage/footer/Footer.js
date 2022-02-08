import React from "react";
import { Outlet } from "react-router-dom";

function Footer(){
  const year=new Date().getFullYear();
  return(
    <div>

  <footer>
    <p>Copyright &copy; {year} </p>
    
  </footer>
  
  </div>)

}

export default Footer;