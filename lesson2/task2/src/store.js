import { createStore } from "redux";

const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";
const RESET = "COUNTER/RESET";

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

const initialState = {
  history: [],
};

function counterReduser(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        history: [...state.history, 1],
      };
    case DECREMENT:
      return {
        ...state,
        history: [...state.history, -1],
      };
    case RESET:
      return {
        ...state,
        history: [],
      };

    default:
      return state;
  }
}

const store = createStore(counterReduser);
export default store;
