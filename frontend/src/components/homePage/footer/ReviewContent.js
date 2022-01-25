import React from "react";

export default function ReviewContent(){
  return(<div class="container overflow-hidden">
  <div class="row gx-5">
    <div class="col-4">
      <div class="p-3 card text-white bg-dark mb-3" >
      <div class="card-header">Header</div>
          <div class="card-body">
          
            <h5 class="card-title">Draw on Tickers</h5>
            <p class="card-text">When making a post you are able to easily select and write on the stock.  This should allow for more diverse and unique ways 
            to discuss the market.</p>
          </div>
      </div>
    </div>
    <div class="col-4">
      <div class="p-3 card text-white bg-dark mb-3" >
      <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Select dates</h5>
            <p class="card-text">Most stock tickers only allow you to see particular periods, like 1 year, or 3 months, but here we allow you to be more specific with the information.  You 
            are able to select any date range you would like, no matter how long the stock has been on the market.</p>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="p-3 card text-white bg-dark mb-3" >
        <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Follow Other Analysts</h5>
            <p class="card-text">Finding and following popular analysts is easy, because the more people engage with a post the more promoted it is in the system.</p>
          </div>
      </div>
    </div>
    </div>
</div>)

}