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
    render={props => <Component {...props} {...childProps} {...rest} />} 
  />
);

const mapStateToProps = state => ({
  navGridATheme: state.theme.navGridATheme,
  oneColumnATheme: state.theme.oneColumnATheme,
  twoColumnATheme: state.theme.twoColumnATheme,
  twoColumnBTheme: state.theme.twoColumnBTheme,
  tableATheme: state.theme.tableATheme
});

export default connect(mapStateToProps)(AppliedRoute);