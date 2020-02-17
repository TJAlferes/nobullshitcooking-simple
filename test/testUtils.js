import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import checkPropsTypes from 'check-prop-types';
//import { runSaga } from 'redux-saga';

const history = createMemoryHistory();

export const TestingRouter = ({ ComponentWithRedirection, RedirectUrl }) => (
  <Router history={history}>
    <Route path="/user/login" exact={true} render={() => <ComponentWithRedirection />} />
    <Route path={RedirectUrl} render={() => <div>{RedirectUrl}</div>} />
  </Router>
)

export const checkProps = (component, conformingProps) => {
  const propError = checkPropsTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};

// use this? or use redux-saga-test-plan's expectSaga?
//export const recordSaga = async (saga, initialAction) => {};