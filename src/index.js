import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import rootReducer from './store/reducers/index';
//import { watchIngredients } from './store/sagas/index';

import App from './App';
import './index.css';
//import registerServiceWorker from "./registerServiceWorker";

const composeEnhancers = process.env.NODE_ENV === "development"
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      sagaMiddleware
    )
  )
);

//sagaMiddleware.run(watchIngredients);
//sagaMiddleware.run(watchIngredients, axiosInstance);  instead of thunk?
/*
// thunk
export function (payload) {
  return function(dispatch, getState, context) {
    const { data } = context.fetch(payload);
    dispatch({ type: 'FETCH_SUCCESS', payload: data });
  }
}

// saga
export function* saga(context, { payload }) {
  const { data } = yield call(context.fetch, payload);
  yield put({ type: 'FETCH_SUCCESS', payload: data });
}
*/

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));