import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../components/Logo";

function MainLayout() {
   const activeLink = ({activeLink}) => activeLink ? "active-link nav-list-item" : "nav-list-item";
   return (
      <div className="wrapper">
         <header>
            <div className="container">
               <Logo />
               <div className="nav-list">
                  <NavLink to="/" className={activeLink}>Pradžia</NavLink>
                  <NavLink to="/myworks" className={activeLink}>Mano darbai</NavLink>
                  <NavLink to="/services" className={activeLink}>Paslaugos</NavLink>
                  <NavLink to="/eshop" className={activeLink}>E-parduotuvė</NavLink>
                  <NavLink to="/contacts" className={activeLink}>Kontaktai</NavLink>
               </div>
               <div className="header-account-block">
                  <div className="wishlist">
                     <img src="./assets/images/heart.svg" alt="heart" />
                     <div className="wishlist-amount">0</div>
                  </div>
                  <div className="cart">
                     <img src="./assets/images/cart.svg" alt="cart" />
                     <div className="cart-item-amount">0</div>
                  </div>
                  <div className="login-block">
                     <button className="login-button">
                        <div className="login-icon">
                           <img src="./assets/images/person.svg" alt="person" />
                        </div>
                        <div>Login/Register</div>
                     </button>
                     
                  </div>
               </div>
            </div>
         </header>

         <div className="container">
            <Outlet />
         </div>

         <footer>
            <div className="container">
               Kontaktai
            </div>
         </footer>
      </div>
   )
}

export default MainLayout;