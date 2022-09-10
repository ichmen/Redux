import React from 'react';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import Weather from './weather/Weather';
import weatherReducer from './weather/weather.reducer';

export default function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>
  );
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(weatherReducer, composeEnhancers(applyMiddleware(thunk)));
