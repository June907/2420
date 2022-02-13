import React, { useState } from "react";
import { Navigate,Outlet, useLocation } from "react-router-dom";



export default function ProtectedRoute(props){

  const isAuth=localStorage.getItem("isAuth");
  console.log(isAuth);
  const location=useLocation();
  return(
    isAuth==="true"?<Outlet/>:<Navigate to="/login" state={{from: location}} replace/>
    


    

  )


}

