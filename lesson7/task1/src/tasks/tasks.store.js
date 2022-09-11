import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { tasksReducer } from './tasks.reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({ tasks: tasksReducer });

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
