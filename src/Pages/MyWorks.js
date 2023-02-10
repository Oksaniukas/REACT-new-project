import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { photoDataActionCreater } from "../store";


function MyWorks() {

   const dispatch = useDispatch();
   const photos = useSelector((state) => state.photos)

   function photoList(photo) {
      dispatch(photoDataActionCreater(photo))
   }

   

   function myWorksCategoryHandler(e) {
      if (e.target.dataset.category === "Person" || e.target.dataset.category === "Family" || e.target.dataset.category === "Children" || e.target.dataset.category === "Christening") {
         let filteredPhotos = photos.filter((photo) => photo.category == e.target.dataset.category)
         return (
            <div className="myworks-image-block-card">
               <div className="myworks-image-block-img">
                  <img src={filteredPhotos.img} alt="" />
               </div>
            </div> 
           
         ) 
      }
   }

  return (
      <div className="container-myworks">
         <aside>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Person" className="myworks-aside-text">Asmeninė fotosesija</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Family" className="myworks-aside-text">šeimos fotosesija</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Love" className="myworks-aside-text">poros fotosesija</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Children" className="myworks-aside-text">vaikai</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Christening" className="myworks-aside-text">Krikštynos</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Weddings" className="myworks-aside-text">Vestuvės</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Nature" className="myworks-aside-text">Gamta</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Pets" className="myworks-aside-text">Gyvūnai</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Other" className="myworks-aside-text">Kitos nuotraukos </div>
         </aside>
        <div className="myworks-image-block">
           <div className="myworks-image-block-card">
              <div className="myworks-image-block-img">
                  <img src={photos.img} alt='photo'/>
              </div>
              {/* {photoList} */}
           </div> 
         </div>
      </div>
   )
};

export default MyWorks;