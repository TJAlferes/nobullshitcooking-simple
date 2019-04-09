//require('@babel/polyfill');
require("regenerator-runtime/runtime");
import React from 'react';
import { render } from 'react-dom';
//import Amplify, { Storage } from 'aws-amplify';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

//import amplifyConfig from '../amplify.config';
import rootReducer from './store/reducers/index';
import { watchAuth, watchPlanner } from './store/sagas/index';
import App from './App';
import './global.css';
//import './main.css';
//import registerServiceWorker from "./registerServiceWorker";

/*Amplify.configure({
  Storage: {
    bucket: amplifyConfig.s3.bucket,
    region: amplifyConfig.s3.region,
    identityPoolId: amplifyConfig.cognito.identity_pool_id
  }
});*/

const composeEnhancers = process.env.NODE_ENV === "development"
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
: null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchPlanner);
// instead of thunk with extra argument, if needed
//sagaMiddleware.run(watchIngredients, axiosInstance);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(app, document.getElementById('root'));