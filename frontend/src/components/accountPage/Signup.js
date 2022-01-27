import React, { useState } from "react";


export default function Signup(){
  
  const[userInfo,setUserInfo]=useState({
    fName:"",
    lName:"",
    email:"",
    password:""


  });

  function handleChange(event){
    const{name,value}=event.target;

    setUserInfo((prevValue)=>{
      return{
        ...prevValue,
        [name]:value
      };

      }
    )

    

  }

  
  return(
    <div className="container">
      <form>
        <input
          onChange={handleChange}
          type="text"
          name="fName"
          value={userInfo.fName}
          placeholder="First Name"
          maxLength="50"


        />
        <input
          onChange={handleChange}
          type="text"
          name="lName"
          value={userInfo.lName}
          placeholder="Last Name"
          maxLength="50"

        />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={userInfo.email}
          placeholder="Email"

        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={userInfo.password}
          placeholder="Password"


          
        />

      </form>



    </div>

  )

}