import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export function AuthenticatedUserRoute({
  userIsAuthenticated,
  path,
  component: Component,
  childProps,
  ...rest
}: Props) {
  return (
    <Route
      exact
      path={path}
      {...rest}
      render={props =>
        userIsAuthenticated
        ? <Component {...props} {...childProps} {...rest} />
        : <Redirect to='/' />
      }
    />
  );
}

interface RootState {
  auth: {
    userIsAuthenticated: boolean;
  };
  theme: {
    breadCrumbsTheme: string;
    navGridATheme: string;
    oneColumnATheme: string;
    tableATheme: string;
    twoColumnATheme: string;
    twoColumnBTheme: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  path: string;
  component: any;
  childProps?: any;
}

const mapStateToProps = (state: RootState) => ({
  userIsAuthenticated: state.auth.userIsAuthenticated,
  breadCrumbsTheme: state.theme.breadCrumbsTheme,
  navGridATheme: state.theme.navGridATheme,
  oneColumnATheme: state.theme.oneColumnATheme,
  tableATheme: state.theme.tableATheme,
  twoColumnATheme: state.theme.twoColumnATheme,
  twoColumnBTheme: state.theme.twoColumnBTheme
});

const connector = connect(mapStateToProps, {});

export default connector(AuthenticatedUserRoute);