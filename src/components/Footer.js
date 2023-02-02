import React from "react";

function Footer() {
   return (
      <div className="footer-container">
      <div className="footer-text-block">
         <div className="footer-text">Fotografė Aistė Mickevič</div>
         <div className="footer-text">Telefono numeris +370 672 37637 </div>
         <div className="footer-text">e-mail: fotoakordai@gmail.com </div>
      </div>
      <div className="social">
         <a href="https://www.facebook.com/fotoakordai/about" title="https://www.facebook.com/fotoakordai/about" target="_blank" >
            <img className="social-item" src="./assets/images/facebook.svg" alt="facebook" />
         </a>
         <a href="https://instagram.com/aiste_mickevic_fotoakordai?igshid=YmMyMTA2M2Y=" title="Fotoakordai" target="_blank">
            <img className="social-item" src="./assets/images/instagram.svg" alt="instagram" />
         </a>
         <a href="mailto:fotoakordai@gmail.com" title="fotoakordai@gmail.com">
            <img className="social-item-mail" src="./assets/images/mail.svg" alt="mail" />
         </a>
      </div>
   </div>
   );
 }
 
 export default Footer;