import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CartButton() {
   let navigate = useNavigate();

   const count = useSelector((state) => state.num.count)
   
   function goToCartPage() {
      navigate('/cart')
   }

   return (
      <button onClick={() => {goToCartPage()}} className="login-button">
         <div className="login-icon">
            <img className="cart-img" src="./assets/images/cart1.png" alt="cart" />
         </div>
         <div className="cart-item-amount">{count}</div>
      </button>
   )
};

export default CartButton;