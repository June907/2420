import { createContext, useContext, useState } from "react";
const AuthContext = createContext({});
export const Auth=()=>{
  return useContext(AuthContext);

 


}