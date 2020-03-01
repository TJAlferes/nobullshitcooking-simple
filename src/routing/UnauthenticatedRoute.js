import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

export const UnauthenticatedRoute = ({
  isAuthenticated,
  component: Component,
  props: childProps,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated
      ? <Component {...props} {...childProps} {...rest} />
      : <Redirect to='/' />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  navGridATheme: state.theme.navGridATheme,
  oneColumnATheme: state.theme.oneColumnATheme,
  twoColumnATheme: state.theme.twoColumnATheme,
  twoColumnBTheme: state.theme.twoColumnBTheme,
  tableATheme: state.theme.tableATheme
});

export default connect(mapStateToProps)(UnauthenticatedRoute);