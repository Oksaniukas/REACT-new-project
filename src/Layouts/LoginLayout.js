import React from "react";
import { Outlet } from "react-router-dom";


function LoginLayout() {
   
   return (
      <div className="wrapper-login">
         <div className="login-page-block">
            <h1> Prašome prisijungti</h1>
            <div>
               <Outlet />
            </div>
         </div>
      </div>
   );
};

export default LoginLayout;
