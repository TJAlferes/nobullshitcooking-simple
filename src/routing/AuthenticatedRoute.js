import React from "react";
import { Route, Redirect } from "react-router-dom";

// remember, browser auth is not sufficient, only show secrets if server authed
export default ({ component: Component, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      childProps.isAuthenticated
      ? <Component {...props} {...childProps} />
      : <Redirect to='/' />
    } 
  />
);