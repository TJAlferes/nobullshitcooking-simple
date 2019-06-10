import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const AuthenticatedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated
      ? <Component {...props} {...rest} />
      : <Redirect to='/' />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  twoColumnATheme: state.theme.twoColumnATheme
});

export default connect(mapStateToProps)(AuthenticatedRoute);