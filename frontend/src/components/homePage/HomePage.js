import React from "react";

import Content from "./header/Content";
import HomePageFeature from "./body/HomePageFeature";
import HomePageIntro from "./body/HomePageIntro";
import HomePageReviewIntro from "./footer/HomePageReviewIntro";
import ReviewContent from "./footer/ReviewContent";
import HomePost from "./header/HomePost";
import SearchBarStock from "./header/SearchBarStock";




export default function HomePage (){

    return (

      <div>



        <div className="container text-light">
        <div className="d-flex">

        <HomePost/>
        <SearchBarStock/>
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

    </div>

    );
  }


