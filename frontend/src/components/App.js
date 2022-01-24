import React from "react";

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import About from "./aboutPage/About";
import HomePage from "./homePage/HomePage";
import Header from "./homePage/header/Header";
import Accouts from "./accoutPage/Accouts";



require(".././styles.scss");
function App(){
  return(
    <div>
  
  
    

    <Router>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/accout" element={<Accouts/>}/>


          
        </Route>

      </Routes>

    </Router>
  
  

  
  
  
    


    
  
  
  </div>)
    
  

}

export default App;