import React, { useState } from "react";
import { useSelector } from "react-redux";

function MyWorks() {

   const photos = useSelector((state) => state.photos);
   const [photoList, setPhotoList] = useState(photos.photos);
   const [categoryLinksList, setCategoryLinksList] = useState([
      {
         category: "All",
         linkText: 'Visos',
         selected: true
      },
      {
         category: "Person",
         linkText: 'Asmeninė fotosesija',
         selected: false
      },
      {
         category: "Family",
         linkText: 'Šeimos fotosesija',
         selected: false
      },
      {
         category: "Children",
         linkText: 'Vaikai',
         selected: false
      },
      {
         category: "Love",
         linkText: 'Poros fotosesija',
         selected: false
      },
      {
         category: "Christening",
         linkText: 'Krikštynos',
         selected: false
      },
      {
         category: "Wedding",
         linkText: 'Vestuvės',
         selected: false
      },
      {
         category: "Birthday",
         linkText: 'Gimtadieniai',
         selected: false
      },
      {
         category: "Nature",
         linkText: 'Gamta',
         selected: false
      },
      {
         category: "Pets",
         linkText: 'Gyvūnai',
         selected: false
      },
      {
         category: "Festival",
         linkText: 'Kitos šventės',
         selected: false
      },
      {
         category: "Challenge",
         linkText: 'Challenge',
         selected: false
      },
   ])

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
      let id = e.target.dataset.id;

      setCategoryLinksList (prev => {
         let newList = [...prev]
         newList.forEach(link => {
            link.selected = false
         })
         newList[id].selected = true;
         return newList
      })
      
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

   let categoryList = categoryLinksList.map((link, idx) => {
      return (
         <div 
            onClick={(e) => myWorksCategoryHandler(e) } 
            data-id = {idx}
            key= {idx}
            data-category={link.category}
            className={`myworks-aside-text ${link.selected ? 'myworks-aside-text-active' : '' } `} > 
            {link.linkText}
         </div>

      )
   })
   
   return (
      <div className="container-myworks">
         <aside>
            {categoryList}
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