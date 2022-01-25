import React from "react";

export default function HomePageFeature(){
  return(
    <div class="container overflow-hidden">
      <div class="row gx-5">
        <div class="col-4">
          <div class="p-3 card text-white bg-dark mb-3" >
          <div class="card-header">Easy</div>
              <div class="card-body">
              
                <h5 class="card-title">Easy</h5>
                <p class="card-text">Unlike similar projects, ours was built with stock information in mind, so discussing and promoting the trends you have seen is easy.</p>
              </div>
          </div>
        </div>
        <div class="col-4">
          <div class="p-3 card text-white bg-dark mb-3" >
          <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Simple</h5>
                <p class="card-text">Want to make a post? All you have to do is create an account, select a stock you wish to use, and create your post!</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="p-3 card text-white bg-dark mb-3" >
            <div class="card-header">Header</div>
              <div class="card-body">
                <h5 class="card-title">Free</h5>
                <p class="card-text">There are no barriers to entry on this platform, all you have to do is find a post you'd like to start a discussion about and make a comment</p>
              </div>
          </div>
        </div>
        </div>
    </div>)


}