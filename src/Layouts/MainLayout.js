import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import CartButton from "../components/CartButton";
import LogoutButton from "../components/LogoutButton";

function MainLayout() {
   let navigate = useNavigate()
   const isActive = ({isActive}) => isActive ? "nav-active-link nav-list-item" : "nav-list-item";
   const [isLoggedin, setIsLoggedin] = useState(false);

   return (
      <div className="wrapper">
         <header>
            <div className="container">
               <Logo />
               <div className="nav-list">
                  <NavLink to="/" className={isActive}>Pradžia</NavLink>
                  <NavLink to="/aboutme" className={isActive}>Apie mane</NavLink>
                  <NavLink to="/myworks" className={isActive}>Mano darbai</NavLink>
                  <NavLink to="/services" className={isActive}>Paslaugos</NavLink>
                  <NavLink to="/contacts" className={isActive}>Kontaktai</NavLink>
               </div>
               <div className="header-account-block">
                  <div className="cart">
                     <CartButton />
                  </div>
                  {/* <div className="login-block">
                     {!isLoggedin ? (
                        <LoginButton />
                     )
                        : (
                           <LogoutButton />
                        )
                     }
                  </div> */}
               </div>
            </div>
         </header>

         <div className="container">
            <Outlet />
         </div>

         <footer>
            <Footer />
         </footer>
      </div>
   )
}

export default MainLayout;