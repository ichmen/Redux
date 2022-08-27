import { userReducer } from "./users.reducer";
import { createStore } from "redux";

const store = createStore(userReducer);
export default store;
