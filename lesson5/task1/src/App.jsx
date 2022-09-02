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
