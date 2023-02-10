import React from "react";
import { useNavigate } from "react-router-dom";


function LogoutButton() {
   let navigate = useNavigate();
   function logoutUser() {
      navigate('/')
   }

   return(
      <button onClick={() => {logoutUser()}} className="login-button">
         <div className="login-icon">
            <img className="login-img" src="./assets/images/person.svg" alt="person" />
         </div>
         <div>Logout</div>
      </button>
   )
}

export default LogoutButton