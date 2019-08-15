//require('@babel/polyfill');
require("regenerator-runtime/runtime");

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// TO DO: code split redux store

import {
  dataGetMeasurements,
  dataGetEquipments,
  dataGetEquipmentTypes,
  dataGetIngredients,
  dataGetIngredientTypes,
  dataGetRecipes,
  dataGetRecipeTypes,
  dataGetCuisines,
  dataGetMethods,
  dataGetPublicRecipes
} from './store/actions/index';
import rootReducer from './store/reducers/index';
import { watchAuth, watchData, watchMessenger, watchPlanner } from './store/sagas/index';
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

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchData);
//sagaMiddleware.run(watchMessenger);
sagaMiddleware.run(watchPlanner);
// instead of thunk with extra argument, if needed
//sagaMiddleware.run(watchIngredients, axiosInstance);

// get initial data
store.dispatch(dataGetMeasurements());
store.dispatch(dataGetEquipments());
store.dispatch(dataGetEquipmentTypes());
store.dispatch(dataGetIngredients());
store.dispatch(dataGetIngredientTypes());
store.dispatch(dataGetRecipes());
store.dispatch(dataGetRecipeTypes());
store.dispatch(dataGetCuisines());
store.dispatch(dataGetMethods());
store.dispatch(dataGetPublicRecipes());

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(app, document.getElementById('root'));