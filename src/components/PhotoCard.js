import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { photoDataActionCreater } from "../store";

function PhotoCard() {

   const dispatch = useDispatch();
   const photos = useSelector((state) => state.photos)
   // const photosList = photos.map()

   function photoBlock(photo) {
      dispatch(photoDataActionCreater(photo))
   }

   return (
            <div className="myworks-image-block-card">
               <div className="myworks-image-block-img">
                  <img src={photos.img} />
               </div>
            </div> 
           
         ) 
}

// function PhotoCard(props) {
//    return (
//       <div className="myworks-image-block-card">
//          <div className="myworks-image-block-img">
//             <img src={props.dataPhotos.img} alt='photo'/>
//          </div>
//       </div> 
     
//    ) 
// }

export default PhotoCard;