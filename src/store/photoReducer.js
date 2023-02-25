import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

const photoDefaultSate = {
   photos: [
      {
         img: './assets/images/person/pers1.jpg',
         category: 'Person',
      },
            {
         img: './assets/images/person/pers2.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers3.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers4.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers5.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers6.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers7.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers8.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers9.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers10.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers11.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers12.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers13.jpg',
         category: 'Person',
      },
           {
         img: './assets/images/person/pers14.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers15.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers16.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers17.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers18.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers19.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers20.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/person/pers21.jpg',
         category: 'Person',
      },
      {
         img: './assets/images/family/fam1.jpg',
         category: 'Family',
      },
      {
         img: './assets/images/family/fam2.jpg',
         category: 'Family',
      },
      {
         img: './assets/images/family/fam3.jpg',
         category: 'Family',
      },
      {
         img: './assets/images/family/fam4.jpg',
         category: 'Family',
      },
      {
         img: './assets/images/family/fam5.jpg',
         category: 'Family',
      },
      {
         img: './assets/images/family/fam6.jpg',
         category: 'Family',
      },
      {
         img: './assets/images/family/fam7.jpg',
         category: 'Family',
      },
      {
         img: './assets/images/family/fam8.jpg',
         category: 'Family',
      },
      {
         img: './assets/images/family/fam9.jpg',
         category: 'Family',
      },
      {
         img: './assets/images/family/fam10.jpg',
         category: 'Family',
      },
   
      {
         img: './assets/images/family/fam11.jpg',
         category: 'Family',
      },
      {
         img: './assets/images/family/fam12.jpg',
         category: 'Family',
      },
      {
         img: './assets/images/children/child1.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child2.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child3.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child4.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child5.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child6.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child7.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child8.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child9.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child10.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child11.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child12.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child13.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child14.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child15.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child16.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child17.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child18.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child19.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child20.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child21.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child22.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child23.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child24.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child25.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child26.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child27.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child28.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child29.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child30.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child31.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child32.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/children/child33.jpg',
         category: 'Children',
      },
      {
         img: './assets/images/love/love1.jpg',
         category: 'Love',
      },
      {
         img: './assets/images/love/love2.jpg',
         category: 'Love',
      },
      {
         img: './assets/images/love/love3.jpg',
         category: 'Love',
      },
      {
         img: './assets/images/love/love4.jpg',
         category: 'Love',
      },
      {
         img: './assets/images/love/love5.jpg',
         category: 'Love',
      },
      {
         img: './assets/images/love/love6.jpg',
         category: 'Love',
      },
      {
         img: './assets/images/love/love7.jpg',
         category: 'Love',
      },
      {
         img: './assets/images/love/love8.jpg',
         category: 'Love',
      },
      {
         img: './assets/images/love/love9.jpg',
         category: 'Love',
      },
      {
         img: './assets/images/love/love10.jpg',
         category: 'Love',
      },
      {
         img: './assets/images/love/love11.jpg',
         category: 'Love',
      },
      {
         img: './assets/images/love/love12.jpg',
         category: 'Love',
      },
      {
         img: './assets/images/christening/christ1.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ2.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ3.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ4.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ5.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ6.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ7.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ8.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ9.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ10.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ11.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ12.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ13.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ14.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ15.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ16.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ17.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ18.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ19.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ20.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ21.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ22.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ23.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ24.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ25.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ26.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ27.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ28.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ29.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ30.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ31.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ32.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/christening/christ33.jpg',
         category: 'Christening',
      },
      {
         img: './assets/images/wedding/wed1.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed2.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed3.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed4.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed5.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed6.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed7.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed8.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed9.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed10.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed11.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed12.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed13.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed14.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed15.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed16.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed17.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/wedding/wed18.jpg',
         category: 'Wedding',
      },
      {
         img: './assets/images/birthday/birth1.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth2.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth3.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth4.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth5.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth6.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth7.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth8.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth9.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth10.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth11.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth12.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth13.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth14.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/birthday/birth15.jpg',
         category: 'Birthday',
      },
      {
         img: './assets/images/nature/nature1.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature2.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature3.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature4.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature5.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature6.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature7.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature8.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature9.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature10.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature11.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature12.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature13.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature14.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature15.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature16.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature17.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature18.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature19.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature20.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature21.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature22.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature23.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature24.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature25.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature26.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature27.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature28.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature29.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature30.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature31.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature32.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature33.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature34.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature35.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/nature/nature36.jpg',
         category: 'Nature',
      },
      {
         img: './assets/images/pets/pet1.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet2.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet3.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet4.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet5.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet6.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet7.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet8.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet9.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet10.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet11.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet12.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet13.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet14.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet15.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet16.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet17.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet18.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet19.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet20.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/pets/pet21.jpg',
         category: 'Pets',
      },
      {
         img: './assets/images/festival/fest1.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest2.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest3.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest4.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest5.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest6.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest7.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest8.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest9.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest10.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest11.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest12.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest13.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest14.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest15.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest16.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest17.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest18.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest19.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest20.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/festival/fest21.jpg',
         category: 'Festival',
      },
      {
         img: './assets/images/challenge/chal1.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal2.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal3.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal4.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal5.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal6.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal7.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal8.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal9.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal10.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal11.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal12.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal13.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal14.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal15.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal16.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal17.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal18.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal19.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal20.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal21.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal22.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal23.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal24.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal25.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal26.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal27.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal28.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal29.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal30.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal31.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal32.jpg',
         category: 'Challenge',
      },
      {
         img: './assets/images/challenge/chal33.jpg',
         category: 'Challenge',
      },
   ]
}
const PHOTOS_DATA = "PHOTOS_DATA";

export const photoReducer = (state = photoDefaultSate, action) => {
   switch (action.type) {
      case PHOTOS_DATA:
         return {...state, photos: action.payload}
      default: return state
   }
}

export const store = createStore(photoReducer, composeWithDevTools(applyMiddleware(thunk)));

export const photoDataActionCreater = (payload) => {
   return {type: PHOTOS_DATA, payload}
}
