import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

const photoDefaultSate = {
   photos: [
      {
         img: './assets/images/person/pers.jpg',
         category: 'Person',
         
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
         img: './assets/images/family/fam13.jpg',
         category: 'Family',
         
      }
   ]
}
const PHOTOS_DATA = "PHOTOS_DATA";

const photoReducer = (state = photoDefaultSate, action) => {
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
