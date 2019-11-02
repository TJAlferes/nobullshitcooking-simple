//require('@babel/polyfill');
require("regenerator-runtime/runtime");

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { SearchProvider } from '@elastic/react-search-ui';

import searchConfig from './config/searchConfig';
import { dataInit, nobscappWindowFocused } from './store/actions/index';
import rootReducer from './store/reducers/index';
import { watchAuth, watchData, watchUser, watchMessenger } from './store/sagas/index';
import App from './App';
import './global.css';
//import './main.css';
import './themes/navGridA.css';
import './themes/oneColumnA.css';
import './themes/twoColumnA.css';
import './themes/twoColumnB.css';
import './themes/tableA.css';
import './nobsc-alert-favicon.png';
import './nobsc-normal-favicon.png';

// TO DO: code split redux store?

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
    if (localStorage.getItem('appState') === null) return undefined;  // sufficient?
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

store.dispatch(dataInit());  // gets initial data

store.subscribe(() => saveToLocalStorage(store.getState()));

// move
window.onblur = function() {
  store.dispatch(nobscappWindowFocused(false));
};
window.onfocus = function() {
  const nobscFavicon = document.getElementById('nobsc-favicon');
  nobscFavicon.href = "/nobsc-normal-favicon.png";
  store.dispatch(nobscappWindowFocused(true));

}

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <SearchProvider config={searchConfig}>
        <App />
      </SearchProvider>
    </BrowserRouter>
  </Provider>
);

render(app, document.getElementById('root'));