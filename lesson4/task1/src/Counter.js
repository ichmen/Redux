import React from "react";
import { connect } from "react-redux";
import * as CounterActions from "./CounterActions";

function Counter({ counter, increment, decrement, reset }) {
  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {counter}
      </span>
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
}

const mapProps = {
  increment: CounterActions.increment,
  decrement: CounterActions.decrement,
  reset: CounterActions.reset,
};
const mapState = (store) => {
  return { counter: store };
};
const connector = connect(mapState, mapProps);
export default connector(Counter);

// import { createStore } from "redux";

// export const INCREMENT = "COUNTER/INCREMENT";
// export const DECREMENT = "COUNTER/DECREMENT";
// export const RESET = "COUNTER/RESET";

// export function increment() {
//   return {
//     type: INCREMENT,
//   };
// }
// export function decrement() {
//   return {
//     type: DECREMENT,
//   };
// }
// export function reset() {
//   return {
//     type: RESET,
//   };
// }
// export function counterReducer(state = 0, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return state + 1;

//     case DECREMENT:
//       return state - 1;
//     case RESET:
//       return 0;

//     default:
//       return state;
//   }
// }

// const store = createStore(
//   counterReducer /* preloadedState, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export { store };
