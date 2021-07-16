import { createStore, combineReducers } from 'redux';
// import {cartReducer} from './reducer/cart.js';
// import {productReducer} from './reducer/product.js';

const initProductState = {
	items: [],
};

const productReducer = (state = initProductState, action) => {
	return state;
};

const initCartState = {
	items: [],
	total: 0,
};

const cartReducer = (state = initCartState, action) => {
	return state;
};

const reducer = combineReducers({
	product: productReducer,
	cart: cartReducer,
});

const store = createStore(reducer);

console.log(store.getState());
