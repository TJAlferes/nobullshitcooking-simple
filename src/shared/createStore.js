import axios from 'axios';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../store/reducers/index';

export default req => {
  const axiosInstance = axios.create({
    baseURL: 'YOUR_BASE_API_ENDPOINT',
    headers: {cookie: req.get('cookie') || ''}
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};