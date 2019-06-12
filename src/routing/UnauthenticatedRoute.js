import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const UnauthenticatedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated
      ? <Component {...props} {...rest} />
      : <Redirect to='/' />
    }
  />
);

const mapStateToProps = state => ({
  navGridATheme: state.theme.navGridATheme,
  oneColumnATheme: state.theme.oneColumnATheme,
  twoColumnATheme: state.theme.twoColumnATheme,
  twoColumnBTheme: state.theme.twoColumnBTheme,
  tableATheme: state.theme.tableATheme
});

export default connect(mapStateToProps)(UnauthenticatedRoute);