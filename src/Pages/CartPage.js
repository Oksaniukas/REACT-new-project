import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteServiceCardAC } from "../store/addToCartReducer";
import { deleteAllCardAC } from "../store/addToCartReducer";


function CartPage() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedServices = useSelector((state) => state.num.selectedServicesList);
  
  
  const cardList = selectedServices.map((card, idx)=> {
    return(
      <div className="cart-page__card-block" key={idx}>
        <div className="cart-page__card-img-block">
          <img src={card.img} alt="service_image" />
        </div>
        <div className="cart-page__card-text">
          <div className="cart-page__card-name">{card.title}</div>
          <div className="cart-page__card-text-duration"> {card.time} valandos</div>
          <div className="cart-pagek__card-text-photo">{card.photocount} redaguotų nuotraukų</div>
          <div className="cart-page__card-text-price">{card.price} Eur</div>
          <button className="cart-page-button-del"  onClick={() => { deleteServiceCard(card) }}>
            Pašalinti
          </button>
        </div>
      </div>
    )
  } )

  function deleteServiceCard(e) {
    dispatch(deleteServiceCardAC(e.id))
    console.log(e.id)
  };

  function deleteAllCard() {
    dispatch(deleteAllCardAC())
  }

  function pleaseLogin() {
    navigate('/login')
  }

   
  return (
    <div className="card-list">
      {cardList}

      {cardList.length === 0  && (
        <div className="cart-items-empty">Krepšelis tuščias</div>
      ) ||  (
      <div className="cart-page-button-block">
        <button onClick={() => { pleaseLogin() }} className="cart-page-button">
          Pirkti
        </button>
        <button onClick={() => { deleteAllCard() }}   className="cart-page-button">
          Išvalyti krepšelį
        </button>
      </div>
    )}

    </div>
  )
}
   
export default CartPage;