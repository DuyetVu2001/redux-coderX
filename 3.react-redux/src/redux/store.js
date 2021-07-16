import { createStore, combineReducers, applyMiddleware } from 'redux';
import todoReducer from './todo';
import thunk from 'redux-thunk';

const reducer = combineReducers({
	todo: todoReducer,
});

const myMiddleware = (store) => (next) => (action) => {
	if (action.type === 'ADD_TODO' && action.payload === 'fuck') {
		action.payload = '***';
	}
	console.log(store.getState());
	return next(action);
};

export default createStore(reducer, applyMiddleware(myMiddleware, thunk));
