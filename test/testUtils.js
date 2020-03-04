/*
import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';  // MemoryRouter?

const history = createMemoryHistory();

export const TestingRouter = ({
  Path,
  ComponentWithRedirection,
  RedirectUrl
}) => (
  <Router history={history}>
    <Route
      path={Path}
      exact={true}
      render={() => <ComponentWithRedirection />}
    />
    <Route
      path={RedirectUrl}
      render={() => <div>{RedirectUrl}</div>}
    />
  </Router>
);
*/

/*
import checkPropsTypes from 'check-prop-types';  // not maintained?

export const checkProps = (component, conformingProps) => {
  const propError = checkPropsTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
*/