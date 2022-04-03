import axios from "./LoginPage/axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default async function GlobalAPI(isGet,url,data) {
    const token_url="/users/token/refresh";
    

    
        if(isGet===false){
        let r;
        await axios.post(url, data,{
            headers: {'Content-Type':'application/json' },
            withCredentials:true})
          .then(res=>{
            console.log(res);
            console.log(res.status);
            (async()=>{if(res.status===401){
                await axios.get(token_url)
                .then(respond=>{
                    if(respond.status===401){
                        console.log(res);
                        return res;
                    };
                })
                console.log(res);
            }
        })();
            r=res;
            console.log(r);
            return res;

          })
          console.log(url);
          return r;
    }
    





}