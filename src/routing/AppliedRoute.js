import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

/*
This component creates a Route
whose rendered child component
contains the passed-in props.
*/

const AppliedRoute = ({ component: Component, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={props => <Component {...props} {...rest} {...childProps} />} 
  />
);

const mapStateToProps = state => ({
  twoColumnATheme: state.theme.twoColumnATheme
});

export default connect(mapStateToProps)(AppliedRoute);