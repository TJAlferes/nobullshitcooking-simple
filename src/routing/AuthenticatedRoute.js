import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

// remember, browser auth is not sufficient, only show secrets if server authed
/*export default ({ component: Component, props: childProps, ...rest }) => {
  console.log(childProps.isAuthenticated);
  return (
    <Route
      {...rest}
      render={props =>
        childProps.isAuthenticated
        ? <Component {...props} {...childProps} />
        : <Redirect to='/' />
      } 
    />
  );
};*/

// remember, browser auth is not sufficient, only show secrets if server authed
const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      props.isAuthenticated
      ? <Component {...props} />
      : <Redirect to='/' />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(AuthenticatedRoute);