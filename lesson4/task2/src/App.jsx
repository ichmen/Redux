import React from "react";
import { Provider } from "react-redux";
import Users from "./users/Users";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}
