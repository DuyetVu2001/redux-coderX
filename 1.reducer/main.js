import { createStore } from 'redux';

const TURN_ON = 'TURN_ON';
const TURN_OFF = 'TURN_OFF';
const CHANGE_SPEED = 'CHANGE_SPEED';

const turnOn = () => ({ type: TURN_ON });
const turnOff = () => ({ type: TURN_OFF });
const changeSpeed = (speed) => ({ type: CHANGE_SPEED, payload: speed });

let initState = {
	speed: 0,
	lastSpeed: 1,
};

const reducer = (state = initState, action) => {
	console.log(action);
	switch (action.type) {
		case CHANGE_SPEED:
			return {
				...state,
				speed: action.payload,
			};
		case TURN_OFF:
			return {
				...state,
				lastSpeed: state.speed,
				speed: 0,
			};
		case TURN_ON:
			return {
				...state,
				speed: state.lastSpeed,
			};
		default:
			return state;
	}
};
const store = createStore(reducer);
console.log(store.getState());

store.dispatch(changeSpeed(3));
console.log(store.getState());

store.dispatch(turnOff());
console.log(store.getState());

store.dispatch(turnOn());
console.log(store.getState());

// let actions = [
// 	{ type: 'CHANGE_SPEED', payload: 3 }, // speed: 3, lastSpeed: 1
// 	{ type: 'TURN_OFF' }, // speed: 0, lastSpeed: 3
// 	{ type: 'TURN_ON' }, // speed: 3, lastSpeed: 3
// ]

// function reduce(actions, cb, initState) {
//     if (initState === 'undefined') {
//         initState = actions[0];
//         actions = actions.slice(1);
//     }

//     for (const action of actions) {
//         initState = cb(initState, action);
//     }
//     return initState;
// }

// let b = reduce(actions, (state, action) => {
//     switch (action.type) {
//         case 'CHANGE_SPEED':
//             return {
//                 ...state,
//                 speed: action.payload,
//             }
//         case 'TURN_OFF':
//             return {
//                 ...state,
//                 lastSpeed: state.speed,
//                 speed: 0,
//             }
//         case 'TURN_ON':
//             return {
//                 ...state,
//                 speed: state.lastSpeed,
//             }
//         default:
//             return state;
//     }
// }, initState)
