// import redux, { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
  // reducer: counterSlice.reducer, // okay for single
  // reducer: {counter: counterSlice.reducer, math: mathSlice.reducer} if you had multiple
}); //redux only wants one main function for global state thus reducer is inbuilt

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
