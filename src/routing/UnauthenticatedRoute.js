import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

/*export default ({ component: Component, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !childProps.isAuthenticated
      ? <Component {...props} {...childProps} />
      : <Redirect to='/' />
    }
  />
);*/

const UnauthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !props.isAuthenticated
      ? <Component {...props} />
      : <Redirect to='/' />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(UnauthenticatedRoute);