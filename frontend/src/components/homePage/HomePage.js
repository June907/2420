import React, { useState, useEffect } from "react";
import Content from "./header/Content";
import HomePageFeature from "./body/HomePageFeature";
import HomePageIntro from "./body/HomePageIntro";
import HomePageReviewIntro from "./footer/HomePageReviewIntro";
import ReviewContent from "./footer/ReviewContent";
import HomePost from "./header/HomePost";
import SearchBarStock from "./header/SearchBarStock";
import { SettingsInputAntennaSharp } from "@material-ui/icons";
import CheckAuth from "../accountPage/CheckAuth"
import { useParams } from 'react-router-dom';


export default function HomePage() {

  const [auth, changeAuth] = useState(false);
  const [user, changeUser] = useState(null);
  const { ticker } = useParams();

  const fetchdata = async () => {
    const [val, user] = await CheckAuth();
    console.log(user);
    console.log(val);
    changeAuth(val);
    changeUser(user);
  }

  useEffect(() => {
    fetchdata();
    console.log(auth);
  }, []);

  return (


    <div>
      <div className="container text-light">
        <div className="d-flex">
          <SearchBarStock ticker={ticker || 'AAPL'} user={user} auth={auth} />
        </div>



        <br></br>
        <br></br>


      </div>

    </div>

  );
}


