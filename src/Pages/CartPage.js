import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



function CartPage() {
  let navigate = useNavigate();
  const selectedCard = useSelector((state) => state.selectedCard);
  const [selectedCards, setSelectedCards] = useState([selectedCard])
  
  const cardList = selectedCards.map((idx)=> {
    return(
      <div className="services-block__card" key={idx}>
        <div className="services-block__card-img">
          <img src={selectedCard.img} alt="service_image" />
        </div>
        <div className="services-block__card-text">
          <div className="services-block__card-name">{selectedCard.title}</div>
          <div className="services-block__card-text-duration">Trukmė: {selectedCard.time} valandos</div>
          <div className="services-block__card-text-photo">{selectedCard.photocount} redaguotų nuotraukų</div>
          <div className="services-block__card-text-price-block">
            <div className="services-block__card-text-price-name">Paslaugos kaina: </div>
            <div className="services-block__card-text-price">{selectedCard.price} Eur</div>
          </div>
        </div>
      </div>
    )
  })

  function pleaseLogin() {
    navigate('/login')
  }
  return (
    <div>
      {cardList}
         
      <button onClick={() => { pleaseLogin() }} className="cart-page-button">
        Pirkti
      </button>
      {selectedCard.length === 0 && (
        <div className="cart-items-empty">Krepšelis tuščias</div>
      )}

    </div>
  )
}
   
export default CartPage;