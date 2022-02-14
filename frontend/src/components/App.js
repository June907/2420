import React from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./aboutPage/About";
import HomePage from "./homePage/HomePage";

import Accounts from "./accountPage/Accounts";
import ProtectedRoute from "./accountPage/LoginPage/ProtectedRoute";
import LoginPage from "./accountPage/LoginPage/LoginPage";
import Fixedbanner from "./homePage/Fixedbanner";
import Profile from "./accountPage/LoginPage/Profile";


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
        {/*private route */}
          <Route element={<ProtectedRoute/>}>
            <Route path="/profile" element={<Profile/>}/>
          </Route>

        </Route>
      
      </Routes>
      
      
    </Router>


  
  
  
    


    
  
  
  </div>)
    
  

}

export default App;