import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Logo from "../components/Logo";

function MainLayout() {
   const isActive = ({isActive}) => isActive ? "nav-active-link nav-list-item" : "nav-list-item";
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
                           <img className="login-img" src="./assets/images/person.svg" alt="person" />
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
            <Footer />
         </footer>
      </div>
   )
}

export default MainLayout;