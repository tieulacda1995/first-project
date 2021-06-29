import { createStore } from 'redux';


var initialState = 3;


const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TANG':
            return state + 1
        case 'GIAM':
            return state - 1
        default:
            return state
    }
}

const store = createStore(myReducer);

console.log(store);
console.log(store.getState());

const action1 = {
    type: "TANG"
};
const action2 = () => ({
    type: "GIAM"
});

store.dispatch(action1);
store.dispatch(action1);
store.dispatch(action1);
store.dispatch(action2());
console.log('action1:', store.getState());
console.log(initialState);