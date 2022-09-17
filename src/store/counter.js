import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter", //can name it whatever you want
  initialState: initialCounterState,
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

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
