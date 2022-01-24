import React from "react";
import {Link,Outlet} from "react-router-dom";

function Header(){
  return(  
  <div>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
  <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
      <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
              <Link className="nav-link" to="/accout">Accout</Link>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Codeply</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
          </li>
      </ul>
  </div>
  <div class="mx-auto order-0">
      <Link className="navbar-brand mx-auto" to="/">Stock App</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
          <span class="navbar-toggler-icon"></span>
      </button>
  </div>
  <div class="navbar-collapse collapse w-100 order-3 justify-content-end dual-collapse2">
      <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <a class="nav-link" href="#">Right</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          
      </ul>
  </div>
</nav>
    <Outlet/>
</div>



 

    

  

     
    


);

}

export default Header;