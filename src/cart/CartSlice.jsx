import { createStore } from 'redux';

const intialState = {
    cart:0
}

const cartReducer = ((state = intialState, action) => {
    switch (action.type) {
        case "ADDTODO":
            return {
                cart: state.cart + 1
            }
        default:
            return state
    }
})

const store = createStore(cartReducer);
export default store;