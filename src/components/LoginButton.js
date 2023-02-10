import React from "react";
import { useNavigate } from "react-router-dom";


function LoginButton() {
   let navigate = useNavigate();
   
   function loginUser() {
      navigate('/login')
   }

   return(
      <button onClick={() => {loginUser()}} className="login-button">
         <div className="login-icon">
            <img className="login-img" src="./assets/images/person.svg" alt="person" />
         </div>
         <div>Login/Register</div>
      </button>
   )
}

export default LoginButton