import React from "react";
import {Cookies} from 'react-cookie';
import { useNavigate } from "react-router-dom";
import GlobalAPI from "../GlobalAPI";
export default async function Logout(){
    const navigate=useNavigate();
    const logout_url='/users/logout';
    const response=await GlobalAPI(true,logout_url,null);
    navigate("/login");
}