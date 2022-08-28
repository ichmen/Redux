import { INCREMENT, DECREMENT, RESET } from "./counter.actions";

// const initialState = { counter: 0 };

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
