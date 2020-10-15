import React from 'react';
import { ImportedStream } from 'react-imported-component';
import { createLoadableStream } from 'react-imported-component/server';
import ReactDOM from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import '../src/imported';
import App from '../src/components/App/App';
import { rootReducer } from '../src/store/rootReducer';
import { generateHtml } from './generateHtml';

const store = createStore(rootReducer, {}, composeWithDevTools());

export function middleware(req, res) {
  // generate the server-rendered HTML using the appropriate router
  const context: {url?: string;} = {};

  const streamId = createLoadableStream();

  const router = (
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={context}>
        <ImportedStream stream={streamId}>
          <App/>
        </ImportedStream>
      </StaticRouter>
    </Provider>
  );

  const markup = ReactDOM.renderToString(router);

  // if react-router is redirecting, do it on the server side
  if (context.url) {
    res.redirect(301, context.url);
  } else {
    // stream is not defined unless we call the render
    const html = generateHtml(markup, store.getState(), () => streamId);
    res.send(html);
  }
}