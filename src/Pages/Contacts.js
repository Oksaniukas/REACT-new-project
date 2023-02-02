import React from "react";

function Contacts() {
   return (
      <div className="contacts-block">
         <div className="contacts-block-text-list">
            <h2>Kontaktai</h2>
            <div className="contacts-block-text">Su manimi galite susisiekti:</div>
            <div className="contacts-block-text-email"> 
               <div>el. paštu: </div> 
               <a className="contacts-block-text-email-adress" href="mailto:fotoakordai@gmail.com">fotoakordai@gmail.com </a> 
            </div>
            <div className="contacts-block-text"> telefonu +370 672 37637 </div>
            <div className="contacts-block-text"> arba naudodamiesi šia forma: </div>
         </div>
         <form>
            <div className="contacts-form-text">Jūsų vardas:</div>
            <input type="text" className="contacts-input-item"/>
            <div className="contacts-form-text">Jūsų el.paštas:</div>
            <input type='email' className="contacts-input-item"/>
            <div className="contacts-form-text">Jūsų telefono numeris:</div>
            <input type="tel" className="contacts-input-item"/>
            <div className="contacts-form-text">Jūsų žinutė:</div>
            <textarea type='text' className="contacts-input-item-message"/>
            <input type='submit' className="contacts-form-button" value='Siųsti' />
         </form>
         <div className="contacts-block-text">Ačiū, kad domitės mano fotografijos paslaugomis.</div>
      </div>
   )
};

export default Contacts;