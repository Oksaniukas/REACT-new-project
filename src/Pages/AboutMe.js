import React from "react";

function AboutMe() {
   return (
      <div className="about-block">
         <div className="about-block__text">
            <h2>Sveiki,</h2>
            <div className="about-block__text-aboutme">
               <p>Esu Aistė.</p>
               <p> Fotografavimas yra ne tik mano hobis, bet ir mylimiausias darbas. </p>
               <p>Į kiekvieną nuotrauką įdedu dalelę savo sielos, kartu pragyvenu kiekvieną akimirką, taip tobulėdama šiame mene. </p>
               <p>Gyvenkime ir mėgaukimės kiekviena akimirka, šypsokimės ir mylėkime gyveninimą.</p>
            </div>
         </div>
         <div className="about-block__image">
            <img src="./assets/images/Aiste.jpg" alt="aiste" />
         </div>
      </div>
   )
};

export default AboutMe;