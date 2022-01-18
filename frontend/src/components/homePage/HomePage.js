import React from "react";
import Stock from "./Stock";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import HomePageFeature from "./HomePageFeature";
import HomePageIntro from "./HomePageIntro";
import HomePageReviewIntro from "./HomePageReviewIntro";
import ReviewContent from "./ReviewContent";

export default function HomePage(){

  return(
  <div>
    <Header/>
    <div class="container text-light">
      <div class="d-flex">
        <Content/>
        <Stock/>
      </div>

      <br></br>
      <br></br>
      <HomePageIntro/>
      <br></br>
      <br></br>
      <HomePageFeature/>
      <br></br>
      <br></br>
      <HomePageReviewIntro/>
      <br></br>
      <br></br>
      <ReviewContent/>



    </div>
      <br></br>
      <br></br>
      <Footer/>
  </div>)
}