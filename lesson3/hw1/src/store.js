import { createStore, combineReducers } from "redux";
import { languageReducer } from "./language.reducer";
import { userReducer } from "./user.reducer";
import { cartReducer } from "./cart.reducer";

const app = combineReducers({
  language: languageReducer,
  user: userReducer,
  cart: cartReducer,
});

const store = createStore(
  app,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
