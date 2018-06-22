import React from 'react';
import { Route } from 'react-router-dom';

/*
This component creates a Route
whose rendered child component
contains the passed-in props.
*/

export default ({ component: C, props: cProps, ...rest }) => (
  <Route
    {...rest}
    render={props => (<C {...props} {...cProps} />)} 
  />
);