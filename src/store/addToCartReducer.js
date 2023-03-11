const defaultState = {
   count: 0,
   selectedServicesList: []
};

const ADD_TO_CART = "ADD_TO_CART";
const DELETE_SERVICE_CARD = "DELETE_SERVICE_CARD";
const DELETE_ALL_CARD = "DELETE_ALL_CARD";



export const addToCartReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_TO_CART:
         return {...state, count: state.count + 1, selectedServicesList: [...state.selectedServicesList, action.payload.service]}
      
      case DELETE_SERVICE_CARD:

      const { index }= action.payload;
      return {
         ...state, count: state.count - 1, selectedServicesList: [ ...state.selectedServicesList.slice(0, index), ...state.selectedServicesList.slice (index + 1)]
      }
      // const index = state.selectedServicesList.indexOf(action.payload)
      
      // return {...state, count: state.count - 1, selectedServicesList: state.selectedServicesList.splice(index, 1)}
         
      // return {...state, count: state.count - 1, selectedServicesList: state.selectedServicesList.splice(action.payload, 0) }


         // return {...state, count: state.count - 1, selectedServicesList: state.selectedServicesList.filter(card => {
         //    return card.id !== action.payload
         // })}

       
      case DELETE_ALL_CARD:
         return {...state, count: 0, selectedServicesList: []}
      default: return state
   }
};

export const addToCartReducerAC = (payload) => {
   return {type: ADD_TO_CART, payload}
}

export const deleteServiceCardAC = (payload) => {
   return { type:DELETE_SERVICE_CARD, payload }
}

export const deleteAllCardAC = (payload) => {
   return {type: DELETE_ALL_CARD, payload}
}