import React from "react";
import Footer from "../homePage/footer/Footer";
import Blocks from './blocks.js';
export default function About(){
  return(
  <div className = "container">
  <h1>About [Insert Website Name here]</h1>
  <br/>
  
  <p className = "text-light" >
    This website was created by the team named '2 for 20' as their senior project at the University of Northern Colorado. The team is made of five students from both the Business Admin: Computer Information Systems and the Software Engineering majors. 
    [Insert Webisite Name Here] is the culmination of one whole school year dedicated to learning how to develop a project from start to finish. The goal of this webisite was to fill the social media void for stock trading. 
    Through the expressed need for a dedicated sight seen through the many reddit threds and facebook groups, [Insert Webisite Name Here] was born. 
  </p>
  <br/>
  <Blocks/>
  <Footer/>
  </div>)
}