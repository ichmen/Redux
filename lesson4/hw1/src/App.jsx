import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import UsersList from './users/UsersList';
import users from './users';

const NEXT = 'USERS/NEXT';
const PREVIOUS = 'USERS/PREVIOUS';

export default function App() {
  return (
    <Provider store={store}>
      <UsersList />;
    </Provider>
  );
}

const defaultState = { users: { usersList: users }, currentPage: 0 };

export function nextPage() {
  return {
    type: NEXT,
  };
}
export function previousPage() {
  return {
    type: PREVIOUS,
  };
}

function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case NEXT:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case PREVIOUS:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };

    default:
      return state;
  }
}

const store = createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// function counterReducer(state = 0, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return state + 1;
//     case RESET:
//       return 0;
//     case DECREMENT:
//       return state - 1;

//     default:
//       return state;
//   }
// }

// const store = createStore(counterReducer);

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
