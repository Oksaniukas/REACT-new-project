import { createStore, combineReducers} from 'redux';
import { photoReducer} from "./photoReducer"
import { addToCartReducer } from './addToCartReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
   num: addToCartReducer,
   photos: photoReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());
