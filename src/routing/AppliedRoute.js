import React from 'react';
import { Route } from 'react-router-dom';

/*
This component creates a Route
whose rendered child component
contains the passed-in props.
*/

export default ({ component: Component, props: childProps, ...rest }) => (
  <Route
    {...rest}
    render={props => <Component {...props} {...childProps} />} 
  />
);