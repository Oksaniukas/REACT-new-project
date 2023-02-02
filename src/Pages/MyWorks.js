import React from "react";

function MyWorks() {
   return (
      <div className="container-myworks">
         <aside>
            <div className="myworks-aside-text">vaikai/šeimos</div>
            <div className="myworks-aside-text">Krikštynos</div>
            <div className="myworks-aside-text">Asmeninės fotosesijos</div>
            <div className="myworks-aside-text">Vestuvės</div>
            <div className="myworks-aside-text">Gamta</div>
            <div className="myworks-aside-text">Gyvūnai</div>
            <div className="myworks-aside-text">Kitos šventės</div>
            <div className="myworks-aside-text">Projektai</div>
         </aside>
         <div className="myworks-image-block">
            <div className="myworks-image-block-card">
               <div className="myworks-image-block-img">
                  <img src="./assets/images/children/child1.jpg" alt="child1" />
               </div>
            </div>
            <div className="myworks-image-block-card">
               <div className="myworks-image-block-img">
                  <img src="./assets/images/children/child3.jpg" alt="child3" />
               </div>
            </div>
            <div className="myworks-image-block-card">
               <div className="myworks-image-block-img">
               <img src="./assets/images/children/child6.jpg" alt="child6" />
               </div>
            </div>
            <div className="myworks-image-block-card">
               <div className="myworks-image-block-img">
               <img src="./assets/images/children/child7.jpg" alt="child7" />
               </div>
            </div>
            <div className="myworks-image-block-card">
               <div className="myworks-image-block-img">
               <img src="./assets/images/children/child17.jpg" alt="child17" />
               </div>
            </div>
            <div className="myworks-image-block-card">
               <div className="myworks-image-block-img">
               <img src="./assets/images/children/child21.jpg" alt="child21" />
               </div>
            </div>

            
         </div>


      </div>
   )
};

export default MyWorks;