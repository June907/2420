import React from "react";

export default function HomePageFeature(){
  return(
    <div className="container overflow-hidden">
      <div className="row gx-5">
        <div className="col-4">
          <div className="p-3 card text-white bg-dark mb-3" >
          <div className="card-header">Header</div>
              <div className="card-body">
              
                <h5 className="card-title">Easy</h5>
                <p className="card-text">Unlike other stock discussion pages, ours was created with stock information in mind.  Making and sharing  </p>
              </div>
          </div>
        </div>
        <div className="col-4">
          <div className="p-3 card text-white bg-dark mb-3" >
          <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Simple</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="p-3 card text-white bg-dark mb-3" >
            <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Free</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
        </div>
        </div>
    </div>)


}