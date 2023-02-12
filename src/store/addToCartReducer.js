const defaultState = {
   count: 0
};

const ADD_TO_CART = "ADD_TO_CART";

export const addToCartReducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADD_TO_CART:
         return {...state, count: state.count + action.payload}
      default: return state
   }
};

export const addToCartReducerAC = (payload) => {
   return {type: ADD_TO_CART, payload}
}