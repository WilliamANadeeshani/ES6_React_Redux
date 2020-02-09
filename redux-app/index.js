const redux = require('redux');
const createStore = redux.createStore;
//
// // ==========action========================
//
// const BUY_CAKE = 'BUY_CAKE';
//
// //action creator
// buyCake = function () {
//
//     // action object
//     return {
//         type: BUY_CAKE,
//         info: 'First redux action'
//     }
// }
//
// //=========state ===========================
// initialState = {
//     noOfCakes :10
// }
//
// //=========reducer ========================
// reducer = (state= initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE:
//             return {
//                 ...state,
//                 noOfCakes: state.noOfCakes -1
//             }
//         default: return state
//     }
// }
//
// //============store =============================
// const store = createStore(reducer);
// console.log("initial state:", store.getState());
// const unsubscribe = store.subscribe(() => console.log("update State: ", store.getState()));
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// unsubscribe();

/*
============== combine reducer =========================
 */

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUT_ICE_CREAM";

const initialCakeState = {
    noOfCakes: 10
};

//cake action creator
buyCake = function () {
    return {
        type: BUY_CAKE
    }
};

//cake reducer
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1
            };
        default:
            return state

    }
};


const initialIceCreamState = {
    noOfIceCreams: 20
};

//ice cram action creator
buyIceCream = function () {

    // return action
    return {
        type: BUY_ICE_CREAM
    }
};

const icecreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM:
            return {
                ...state,
                noOfIceCreams: state.noOfIceCreams - 1
            };
        default:
            return state
    }
};

const reducers = redux.combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer
});

const store = redux.createStore(reducers);

console.log("Initial State: ", store.getState());
const subscriber = store.subscribe(() => console.log("Update the Store: ", store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
subscriber();




