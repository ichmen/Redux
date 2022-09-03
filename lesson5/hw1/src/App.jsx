import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import UsersList from './users/UsersList';
import users from './users';

const CHANGE = 'USERS/CHANGE';

export default function App() {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
}

const defaultState = { users: { filterText: '', usersList: users } };

export function inputChange(value) {
  return {
    type: CHANGE,
    payload: {
      value,
    },
  };
}

function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        users: { ...state.users, filterText: action.payload.value },
      };

    default:
      return state;
  }
}

const store = createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
