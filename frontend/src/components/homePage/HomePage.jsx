import React from "react";
import Stock from "./Stock";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export default function HomePage(){

  return(
  <div>
    <Header/>
    <div class="container d-flex text-light">
    <Content/>
    <Stock/>



    </div>
    <Footer/>
    </div>)
}