import { userReducer } from "./users.reducer";
import { counterReducer } from "./counter.reducer";
import { createStore, combineReducers } from "redux";

const appReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

const store = createStore(
  appReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
