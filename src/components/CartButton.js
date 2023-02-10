import React from "react";
import { useNavigate } from "react-router-dom";

function CartButton() {
   let navigate = useNavigate();
   
   function goToCartPage() {
      navigate('/cart')
   }

   return (
      <button onClick={() => {goToCartPage()}} className="login-button">
         <div className="login-icon">
            <img className="cart-img" src="./assets/images/cart1.png" alt="cart" />
         </div>
         <div className="cart-item-amount">0</div>
      </button>
   )
};

export default CartButton;