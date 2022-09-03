import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import options from './options';
import TransferList from './options/TransferList';
import { selectedOptionsSelector, optionsListSelector } from './options/options.selector';

const TOGGLE = 'OPTIONS/TOGGLE';

export default function App() {
  return (
    <Provider store={store}>
      <TransferList />
    </Provider>
  );
}

const defaultState = { options: { optionsList: options, selectedOptions: [] } };

export function selectedToggle(optionId) {
  return {
    type: TOGGLE,
    payload: { optionId },
  };
}

export function optionsReducer(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE:
      const selected = selectedOptionsSelector(state);
      const { optionId } = action.payload;
      const updatedSelected = selected.includes(optionId)
        ? selected.filter(id => id !== optionId)
        : selected.concat(optionId);

      return {
        ...state,
        options: { optionsList: optionsListSelector(state), selectedOptions: updatedSelected },
      };

    default:
      return state;
  }
}
const store = createStore(
  optionsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
