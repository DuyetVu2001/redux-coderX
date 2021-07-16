import axios from 'axios';
import { creatSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

const ADD_TODO = 'ADD_TODO';
const SET_TODOS = 'SET_TODOS';

export const addTodo = (text) => ({
	type: ADD_TODO,
	payload: text,
});

export const setTodos = (items) => ({
	type: SET_TODOS,
	payload: items,
});

export const fetchTodos = () => async (dispatch) => {
	const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
	dispatch(setTodos(res.data));
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				items: [action.payload, ...state.items],
			};
		case SET_TODOS:
			return {
				...state,
				items: action.payload,
			};
		default:
			return state;
	}
}
