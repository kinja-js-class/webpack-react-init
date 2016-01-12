import { addTodo } from './actions'

const initialState = {
  todos: []
}

export function todoApp(state = initialState, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return Object.assign({}, state, {
					todos: action.payload
				})
		default:
			return state;
	}
}
