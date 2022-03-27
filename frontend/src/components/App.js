import React from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./aboutPage/About";
import HomePage from "./homePage/HomePage";

import Accounts from "./accountPage/Accounts";
import ProtectedRoute from "./accountPage/LoginPage/ProtectedRoute";
import LoginPage from "./accountPage/LoginPage/LoginPage";
import Fixedbanner from "./homePage/Fixedbanner";
import ProfileHome from "./accountPage/ProfileHome"
import Explore from "./accountPage/PostPage/Explore"

require(".././styles.scss");
function App(){
  return(
    <div>


    <Router>
      <Routes>

        <Route path="/" element={<Fixedbanner/>}>
        {/*public route */}
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/account" element={<Accounts/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
        {/*private route */}
          <Route element={<ProtectedRoute/>}>
            <Route path="/profile" element={<ProfileHome/>}/>
            <Route path="/Explore" element={<Explore/>}/>
          

        </Route>
      
      </Routes>
      
      
    </Router>


  
  
  
    


    
  
  
  </div>)
    
  

}

export default App;