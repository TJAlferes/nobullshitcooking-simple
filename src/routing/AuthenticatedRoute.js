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
  navGridATheme: state.theme.navGridATheme,
  oneColumnATheme: state.theme.oneColumnATheme,
  twoColumnATheme: state.theme.twoColumnATheme,
  twoColumnBTheme: state.theme.twoColumnBTheme
});

export default connect(mapStateToProps)(AuthenticatedRoute);