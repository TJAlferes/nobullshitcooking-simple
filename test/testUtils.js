import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
//import checkPropsTypes from 'check-prop-types';
//import { runSaga } from 'redux-saga';

// remove?

const history = createMemoryHistory();
//path="/user/login"
export const TestingRouter = ({ Path, ComponentWithRedirection, RedirectUrl }) => (
  <Router history={history}>
    <Route
      path={Path}
      exact={true}
      render={() => {
        console.log('WTF1!');
        return <ComponentWithRedirection />
      }}
    />
    <Route
      path={RedirectUrl}
      render={() => {
        console.log('WTF2!');
        return <div>{RedirectUrl}</div>
      }}
    />
  </Router>
);

/*export const checkProps = (component, conformingProps) => {
  const propError = checkPropsTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};*/

// use this? or use redux-saga-test-plan's expectSaga?
//export const recordSaga = async (saga, initialAction) => {};