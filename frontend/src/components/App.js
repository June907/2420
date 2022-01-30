import React from "react";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./aboutPage/About";
import HomePage from "./homePage/HomePage";
import Header from "./homePage/header/Header";
import Accounts from "./accountPage/Accounts";

import LoginPage from "./accountPage/LoginPage/LoginPage";


require(".././styles.scss");
function App(){
  return(
    <div>
  
  
    

    <Router>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/account" element={<Accounts/>}/>
            
          
          <Route path="/login" element={<LoginPage/>}/>
          


          
        </Route>

      </Routes>

    </Router>
  
  

  
  
  
    


    
  
  
  </div>)
    
  

}

export default App;