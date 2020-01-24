export function count(state = 1, action) {
	switch (action.type) {
		case 'SET_COUNT':
			return action.count;

		default:
			return state;
	}

}