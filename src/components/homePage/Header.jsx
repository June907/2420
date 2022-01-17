import React from "react";
import SearchIcon from '@mui/icons-material/Search';
function Header(){
  return(  
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="d-flex flex-grow-1">
      <span class="w-100 d-lg-none d-block"></span>
        <a class="navbar-brand d-none d-lg-inline-block text-light" href="#">Stock App</a>
      
        
      
      </div>
      
      <div class="navbar-collapse collapse w-40">
          <form class="navbar-nav w-100 justify-content-center">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            
          </form>
      </div>
      <div class="collapse navbar-collapse flex-grow-1 justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto flex-nowrap  ">
          <li class="nav-item ">
            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Account</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">News</a>
          </li>

          </ul>
          </div>
        
  </nav>
</header>

 

    

  

     
    


);

}

export default Header;