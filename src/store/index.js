// import redux, { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter", //can name it whatever you want
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    }, // automatically receives the current state don't need to pass action and write if checks because they will automatically be called don't manipulate existing state (good news is you cannot update existing state it uses a package and will clone the state and change what is change then override what was there thus is immutable)
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // since we passed in payload react will call it by payload but you can pass in an object like action.payload.amount
    }, // putting action because we need some data didn't have to above but it was always there as an option to recieve payload
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer, // okay for single
  // reducer: {counter: counterSlice.reducer, math: mathSlice.reducer} if you had multiple
}); //redux only wants one main function for global state thus reducer is inbuilt

export const counterActions = counterSlice.actions;
export default store;
//Without tool kit
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);
// without toolkit

// export default store;
