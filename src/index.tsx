//require('@babel/polyfill');
require("regenerator-runtime/runtime");
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
//import { SearchProvider } from '@elastic/react-search-ui';
import { DndProvider } from 'react-dnd';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import MultiBackend from 'react-dnd-multi-backend';

//import searchConfig from './config/searchConfig';
import {
  initWindowBlurHandler,
  initWindowFocusHandler
} from './utils/nobscappWindow';
import {
  loadFromLocalStorage,
  saveToLocalStorage
} from './utils/storageHelpers';
import { dataInit } from './store/data/actions';
import rootReducer from './store/rootReducer';
import {
  watchAuth,
  watchData,
  watchMessenger,
  watchUserAvatar,
  watchUserEquipment,
  watchUserFavorite,
  watchUserFriendship,
  watchUserIngredient,
  watchUserPlan,
  watchUserRecipe,
  watchUserSave
} from './store/watcherSagas';
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
sagaMiddleware.run(watchData);
sagaMiddleware.run(watchMessenger);
sagaMiddleware.run(watchUserAvatar);
sagaMiddleware.run(watchUserEquipment);
sagaMiddleware.run(watchUserFavorite);
sagaMiddleware.run(watchUserFriendship);
sagaMiddleware.run(watchUserIngredient);
sagaMiddleware.run(watchUserPlan);
sagaMiddleware.run(watchUserRecipe);
sagaMiddleware.run(watchUserSave);

store.dispatch(dataInit());

store.subscribe(() => saveToLocalStorage(store.getState()));

initWindowBlurHandler(store);
initWindowFocusHandler(store);

/*const app = (
  <Provider store={store}>
    <BrowserRouter>
      <SearchProvider config={searchConfig}>
        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
          <App />
        </DndProvider>
      </SearchProvider>
    </BrowserRouter>
  </Provider>
);*/

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <App />
      </DndProvider>
    </BrowserRouter>
  </Provider>
);

render(app, document.getElementById('root'));