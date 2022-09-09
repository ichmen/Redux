import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { counterReduser } from './counterReduser';
import Counter from './Counter';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />;
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
const store = createStore(counterReduser, applyMiddleware(logger));
