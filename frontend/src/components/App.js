import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./aboutPage/About";
import Analytics from "./aboutPage/Analytics";

import HomePage from "./homePage/HomePage";
import Logout from "./accountPage/LoginPage/Logout";
import Accounts from "./accountPage/Accounts";
import ProtectedRoute from "./accountPage/LoginPage/ProtectedRoute";
import LoginPage from "./accountPage/LoginPage/LoginPage";
import Fixedbanner from "./homePage/Fixedbanner";
import ProfileHome from "./accountPage/ProfileHome"
import Explore from "./accountPage/PostPage/Explore"


require(".././styles.scss");
function App() {
  return (
    <div>


      <Router>
        <Routes>

          <Route path="/" element={<Fixedbanner />}>
            {/*public route */}
            <Route path="/:ticker" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Accounts />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/analytics" element={<Analytics />}/>
            <Route path="/profile/:username" element={<ProfileHome />}/>
          </Route>
          {/*private route */}
          <Route element={<ProtectedRoute />}>

            <Route path="/Explore" element={<Explore />} />


          </Route>

        </Routes>


      </Router>











    </div>)



}

export default App;