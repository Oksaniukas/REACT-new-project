import React, { useState } from "react";
import { useSelector } from "react-redux";

function MyWorks() {

   const photos = useSelector((state) => state.photos);
   const [photoList, setPhotoList] = useState(photos.photos)

   const photoCardList = photoList.map((photo, idx) => {
      return (
         <div className="myworks-image-block-card" key={idx}>
              <div className="myworks-image-block-img">
                  <img src={photo.img} alt='photo'/>
              </div>
           </div> 
      )
   })   
 
   function myWorksCategoryHandler(e) {
      
      if (e.target.dataset.category === "All" ) {
         setPhotoList(photos.photos)
      } else {
         let filteredPhotos = photos.photos.filter((photo) => photo.category == e.target.dataset.category)
         setPhotoList(filteredPhotos)      
         addActiveClass(e)
      }
   }
   
   function addActiveClass(e) {
      e.target.className = "myworks-aside-text-active myworks-aside-text"
   }
   
  return (
      <div className="container-myworks">
         <aside>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="All" className="myworks-aside-text-active myworks-aside-text">visos</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Person" className="myworks-aside-text">Asmeninė fotosesija</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Family" className="myworks-aside-text">šeimos fotosesija</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Children" className="myworks-aside-text">vaikai</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Love" className="myworks-aside-text">poros fotosesija</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Christening" className="myworks-aside-text">Krikštynos</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Wedding" className="myworks-aside-text">Vestuvės</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Birthday" className="myworks-aside-text">Gimtadieniai</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Nature" className="myworks-aside-text">Gamta</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Pets" className="myworks-aside-text">Gyvūnai</div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Festival" className="myworks-aside-text">Kitos šventės </div>
            <div onClick={(e) => myWorksCategoryHandler(e) } data-category="Challenge" className="myworks-aside-text">Challenge</div>
         </aside>
        <div className="myworks-image-block">
           <div className="myworks-image-block-card">
              <div className="myworks-image-block-img">
                  {photoCardList}
              </div>
           </div> 
         </div>
      </div>
   )
};

export default MyWorks;