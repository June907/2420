import React from "react";
import {GoogleLogout} from "react-google-login";

const clientId="517450042509-bhmmi5plriq596mmn8jgdb94647si4k2.apps.googleusercontent.com"

export default function GoogleAPILogout() { 
  const onSuccess=()=>{
    alert("Logout made successfully");

  };

  return(
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        ></GoogleLogout>
    </div>

  );

}