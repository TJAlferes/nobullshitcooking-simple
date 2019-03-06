import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: Component, props: childProps, ...rest }) => (
  /*<Route
    {...rest}
    render={(props) =>
      !childProps.isAuthenticated
      ? <Component {...props} {...childProps} />
      : <Redirect to='/' />
    }
  />*/
  <Route
    {...rest}
    render={props => <Component {...props} {...childProps} />}
  />
);