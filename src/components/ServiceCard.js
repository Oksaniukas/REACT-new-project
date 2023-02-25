import React from "react";
import { useDispatch } from "react-redux";
import { addToCartReducerAC } from "../store/addToCartReducer";
import { addServiceCardReducer } from "../store/servicesCartReducer";

function ServiceCard(props) {

   const dispatch = useDispatch();
   const addToCart = () => dispatch(addToCartReducerAC(1))
   
  


   return (
      <div className="services-block__card">
         <div className="services-block__card-img">
            <img src={props.dataServiceCard.img} alt="service_image" />
         </div>
         <div className="services-block__card-text">
            <div className="services-block__card-name">{props.dataServiceCard.title}</div>
            <div className="services-block__card-text-duration">Trukmė: {props.dataServiceCard.time} valandos</div>
            <div className="services-block__card-text-photo">{props.dataServiceCard.photocount} redaguotų nuotraukų</div>
            <div className="services-block__card-text-price-block">
               <div className="services-block__card-text-price-name">Paslaugos kaina: </div>
               <div className="services-block__card-text-price">{props.dataServiceCard.price} Eur</div>
            </div>
            <div className="services-block__button-block">
               <button onClick={() => { addToCart() }} className="services-block__button">Įdėti į krepšį</button>
            </div>
         </div>
      </div>
   )
};

export default ServiceCard;