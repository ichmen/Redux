import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import UserInfo from './users/UserInfo';
import SearchField from './users/SearchField';
import { usersReducer } from './users/usersReducer';

export default function App() {
  return (
    <Provider store={store}>
      <UserInfo />
      <SearchField />
    </Provider>
  );
}

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
};
const appReducer = combineReducers({
  users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(appReducer, applyMiddleware(logger));
const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(logger), applyMiddleware(thunk)),
);
