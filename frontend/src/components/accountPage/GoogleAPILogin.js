import React from "react";
import {GoogleLogin} from "react-google-login";
// refresh token
import { RefreshTokenSetup } from './RefreshToken';

const clientId="517450042509-bhmmi5plriq596mmn8jgdb94647si4k2.apps.googleusercontent.com";

export default function GoogleAPILogin(){
  const onSuccess = (res) => {
    //console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    RefreshTokenSetup(res);
  };

  const onFailure = (res) => {
    //console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  return(
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{marginTop:"100px"}}
        isSignedIn={true}
        />


    </div>

  )

}