//require('@babel/polyfill');
require("regenerator-runtime/runtime");

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// TO DO: code split redux store

import { dataInit } from './store/actions/index';
import rootReducer from './store/reducers/index';
import { watchAuth, watchData, watchUser, watchMessenger, watchPlanner } from './store/sagas/index';
import App from './App';
import './global.css';
//import './main.css';
import './themes/navGridA.css';
import './themes/oneColumnA.css';
import './themes/twoColumnA.css';
import './themes/twoColumnB.css';
import './themes/tableA.css';
//import registerServiceWorker from "./registerServiceWorker";

const composeEnhancers = process.env.NODE_ENV === "development"
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
: null || compose;

const sagaMiddleware = createSagaMiddleware();

function saveToLocalStorage(state) {
  try {
    localStorage.setItem('appState', JSON.stringify(state));
  } catch (err) {
    console.log(err);
  }
}

function loadFromLocalStorage() {
  try {
    if (localStorage.getItem('appState') === null) return undefined;
    return JSON.parse(localStorage.getItem('appState'));
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchData);
sagaMiddleware.run(watchUser);
sagaMiddleware.run(watchMessenger);
sagaMiddleware.run(watchPlanner);

store.dispatch(dataInit());  // get initial data (Note: this needs to be optimized)

store.subscribe(() => saveToLocalStorage(store.getState()));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(app, document.getElementById('root'));