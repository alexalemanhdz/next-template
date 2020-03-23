import { createStore } from 'redux';

const tempState = {
	// add your states here
};

const reducer = (state = tempState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const initializeStore = initialState => {
	return createStore(reducer, initialState);
};

export default initializeStore;
