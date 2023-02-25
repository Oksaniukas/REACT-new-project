const cardServiceDefaultState = {
   cardServiceData: [
      {
         id: "1",
         img: "./assets/images/person/pers16.jpg",
         title: "Asmeninė fotosesija",
         time: "2",
         photocount: "30",
         price: "70"
      },
      {
         id: "2",
         img: "./assets/images/love/love7.jpg",
         title: "Poros fotosesija",
         time: "2",
         photocount: "50",
         price: "100"
      },
      {
         id: "3",
         img: "./assets/images/family/fam11.jpg",
         title: "Šeimos fotosesija",
         time: "2-3",
         photocount: "100",
         price: "120"
      },
      {
         id: "4",
         img: "./assets/images/christening/christ8.jpg",
         title: "Krykštinų fotosesija",
         time: "2-3",
         photocount: "100",
         price: "120"
      },
      {
         id: "5",
         img: "./assets/images/wedding/wed12.jpg",
         title: "Vestuvių fotosesija",
         time: "4",
         photocount: "120",
         price: "150"
      },
      {
         id: "6",
         img: "./assets/images/wedding/wed5.jpg",
         title: "Vestuvių fotosesija",
         time: "8",
         photocount: "200",
         price: "250"
      },
      {
         id: "7",
         img: "./assets/images/camera.jpg",
         title: "Dovanų kuponas fotosesijai",
         time: "2",
         photocount: "30",
         price: "70"
      },
      {
         id: "8",
         img: "./assets/images/camera.jpg",
         title: "Dovanų kuponas fotosesijai",
         time: "2",
         photocount: "50",
         price: "100"
      },
      {
         id: "9",
         img: "./assets/images/camera.jpg",
         title: "Dovanų kuponas fotosesijai",
         time: "2-3",
         photocount: "100",
         price: "120"
      },
      {
         id: "10",
         img: "./assets/images/camera.jpg",
         title: "Dovanų kuponas fotosesijai",
         time: "24",
         photocount: "120",
         price: "150"
      }
   ],
   selectedCardService: {}
}

const ADD_SERVICE_CARD = "ADD_SERVICE_CARD";

export const addServiceCardReducer = (state = cardServiceDefaultState, action) => {
   switch (action.type) {
      case ADD_SERVICE_CARD:
         return {...state, selectedCardService: action.payload}
      default: return state
   }
};

export const addServiceCardReducerAC = (payload) => {
   return {type: ADD_SERVICE_CARD, payload}
}

