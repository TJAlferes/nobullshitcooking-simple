//require('@babel/polyfill');
require("regenerator-runtime/runtime");

import { SearchProvider } from '@elastic/react-search-ui';
import React from 'react';
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import { searchConfig } from './config/searchConfig';
import {
  initWindowBlurHandler,
  initWindowFocusHandler
} from './utils/nobscappWindow';
import {
  loadFromLocalStorage,
  saveToLocalStorage
} from './utils/storageHelpers';
import { dataInit } from './store/data/actions';
import { rootReducer } from './store/rootReducer';
import {
  watchAuth,
  watchAvatar,
  watchContent,
  watchData,
  watchEquipment,
  watchFavorite,
  watchFriendship,
  watchIngredient,
  watchMessenger,
  watchPlan,
  watchRecipe,
  watchSave
} from './store/watchers/index';
import App from './App';
import './global.css';
import './themes/navGridA.css';
import './themes/oneColumnA.css';
import './themes/twoColumnA.css';
import './themes/twoColumnB.css';
import './themes/tableA.css';
import './nobsc-alert-favicon.png';
import './nobsc-normal-favicon.png';

// TO DO: code split redux store?

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadFromLocalStorage();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchAvatar);
sagaMiddleware.run(watchContent);
sagaMiddleware.run(watchData);
sagaMiddleware.run(watchEquipment);
sagaMiddleware.run(watchFavorite);
sagaMiddleware.run(watchFriendship);
sagaMiddleware.run(watchIngredient);
sagaMiddleware.run(watchMessenger);
sagaMiddleware.run(watchPlan);
sagaMiddleware.run(watchRecipe);
sagaMiddleware.run(watchSave);

store.dispatch(dataInit());

store.subscribe(() => saveToLocalStorage(store.getState()));

initWindowBlurHandler(store);
initWindowFocusHandler(store);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <SearchProvider config={searchConfig}>
        <DndProvider options={HTML5toTouch}>
          <App />
        </DndProvider>
      </SearchProvider>
    </BrowserRouter>
  </Provider>
);

render(app, document.getElementById('root'));