import { createStore } from "redux";

export const INCREMENT = "COUNTER/INCREMENT";
export const DECREMENT = "COUNTER/DECREMENT";
export const RESET = "COUNTER/RESET";

export function increment() {
  return {
    type: INCREMENT,
  };
}
export function decrement() {
  return {
    type: DECREMENT,
  };
}
export function reset() {
  return {
    type: RESET,
  };
}
export function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;

    default:
      return state;
  }
}

const store = createStore(
  counterReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export { store };
