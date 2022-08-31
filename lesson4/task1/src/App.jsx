import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Counter from "./Counter";
import { INCREMENT, DECREMENT, RESET } from "./CounterActions";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
}

const store = createStore(counterReducer);

// import store from "./store";
// import { addProduct, removeProduct } from "./cart.actions";
// import { setUser, removeUser } from "./user.actions";
// import { setLanguage } from "./language.actions";

// const product1 = { id: 22, name: "milk" };
// const product2 = { id: 23, name: "milk" };
// const user = { name: "Bob" };

// store.subscribe(() => {
//   console.log(store.getState());
// });
// store.dispatch(addProduct(product1));
// store.dispatch(addProduct(product2));
// store.dispatch(removeProduct(22));
// store.dispatch(setUser(user));
// store.dispatch(setLanguage("de"));
// store.dispatch(removeUser());
// store.dispatch(removeProduct(23));
