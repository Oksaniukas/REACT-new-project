import { createStore, combineReducers} from 'redux';
import { photoReducer} from "./photoReducer"
import { addToCartReducer } from './addToCartReducer';
import { addServiceCardReducer } from './servicesCartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
   num: addToCartReducer,
   photos: photoReducer,
   selectedCard: addServiceCardReducer
})

export const store = createStore(rootReducer, composeWithDevTools());
