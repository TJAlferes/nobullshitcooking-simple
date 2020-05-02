import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

export function UnauthenticatedRoute({
  isAuthenticated,
  path,
  component: Component,
  childProps,
  ...rest
}: Props) {
  return (
    <Route
      exact
      {...rest}
      render={props =>
        !isAuthenticated
        ? <Component {...props} {...childProps} {...rest} />
        : <Redirect to='/' />
      }
    />
  );
}

interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
  theme: {
    breadCrumbsTheme: string;
    navGridATheme: string;
    oneColumnATheme: string;
    twoColumnATheme: string;
    twoColumnBTheme: string;
    tableATheme: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  path: string;
  component: any;
  childProps?: any;
}

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated,
  breadCrumbsTheme: state.theme.breadCrumbsTheme,
  navGridATheme: state.theme.navGridATheme,
  oneColumnATheme: state.theme.oneColumnATheme,
  twoColumnATheme: state.theme.twoColumnATheme,
  twoColumnBTheme: state.theme.twoColumnBTheme,
  tableATheme: state.theme.tableATheme
});

const connector = connect(mapStateToProps);

export default connector(UnauthenticatedRoute);