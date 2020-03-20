import { createStore } from 'redux';

initialState = {
    //add your states here
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export const initializeStore = (initialState) => {
    return createStore(reducer, initialState);
};