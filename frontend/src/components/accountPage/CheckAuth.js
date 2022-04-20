import axios from "./LoginPage/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocalConvenienceStoreOutlined } from "@material-ui/icons";
import GlobalAPI from "../accountPage/GlobalAPI"

export default async function CheckAuth() {
    const url = "/users/check";
    const res = await GlobalAPI(true, url, null);
    console.log("Checking...");
    console.log(res);
    return res.data.authenticated;
}