import React from "react";
import dataServiceCard from "../dataServiceCard";
import ServiceCard from "../components/ServiceCard";


function Services() {

   let listOfServiceCard = dataServiceCard.map((card, idx) => {
      return <ServiceCard key={idx} dataServiceCard={card} />
   })

   return (
      <div className="services-block">
         {listOfServiceCard}
      </div>
   )
};

export default Services;