//require('@babel/polyfill');
require("regenerator-runtime/runtime");

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { SearchProvider } from '@elastic/react-search-ui';

// TO DO: code split redux store

import { dataInit } from './store/actions/index';
import rootReducer from './store/reducers/index';
import { watchAuth, watchData, watchUser, watchMessenger, watchPlanner } from './store/sagas/index';
import buildRequest from './utils/search/buildRequest';
import buildState from './utils/search/buildState';
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
sagaMiddleware.run(watchPlanner);

store.dispatch(dataInit());  // gets initial data (Note: this needs to be optimized)

store.subscribe(() => saveToLocalStorage(store.getState()));

const searchMethods = {
  onResultClick: function() {

  },
  onAutocompleteResultClick: function() {

  },
  onAutocomplete: async function({ searchTerm }) {
    const res = await axios.get(JSON.stringify(buildRequest({searchTerm})));
    const state = buildState(res.data.found);
    return {autocompletedResults: state.results};
  },
  onSearch: async function(state) {
    const res = await axios.get(JSON.stringify(buildRequest(state)));
    return buildState(res.data.found, state.resultsPerPage)
  }
};

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <SearchProvider config={searchMethods}>
        <App />
      </SearchProvider>
    </BrowserRouter>
  </Provider>
);

render(app, document.getElementById('root'));