import React, { useState, useEffect } from "react";
import main1 from "../image/main/main1.jpg";
import main2 from "../image/main/main2.jpg";
import main3 from "../image/main/main3.jpg";
import main4 from "../image/main/main4.jpg"
import main5 from "../image/main/main5.jpg"
import main6 from "../image/main/main6.jpg"
import main7 from "../image/main/main7.jpg"
import main8 from "../image/main/main8.jpg"
import main9 from "../image/main/main9.jpg"
import main10 from "../image/main/main10.jpg"
import main11 from "../image/main/main11.jpg"

const mainImage = [
   <img key={main1} src={main1} />,
   <img key={main2} src={main2} />,
   <img key={main3} src={main3} />,
   <img key={main4} src={main4} />,
   <img key={main5} src={main5} />,
   <img key={main6} src={main6} />,
   <img key={main7} src={main7} />,
   <img key={main8} src={main8} />,
   <img key={main9} src={main9} />,
   <img key={main10} src={main10} />,
   <img key={main11} src={main11} />
];

function Slider() {
   const [activeIndex, setActiveIndex] = useState(0);
   const previuosImageIndex = activeIndex ? activeIndex - 1 : mainImage.length - 1;
   const nextImageIndex = activeIndex === mainImage.length - 1 ? 0 : activeIndex + 1;

   useEffect(() => {
      const interval = setInterval(() => {
         setActiveIndex((current) => {
            const response = current === mainImage.length - 1 ? 0 : current + 1 
            return response
         })
      }, 4000)
      return () => clearInterval()
   }, [])

   return (
      <div className="slider">
         <div className="slider-image slider-image-previuos " key={previuosImageIndex}>
            {mainImage[previuosImageIndex]}
         </div>
         <div className="slider-image" key={activeIndex}>
            {mainImage[activeIndex]}
         </div>
         <div className="slider-image slider-image-next" key={nextImageIndex}>
            {mainImage[nextImageIndex]}
         </div>
      </div>
   )
}

export default Slider;