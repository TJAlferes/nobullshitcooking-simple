import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

export function UnauthenticatedRoute({
  isAuthenticated,
  children,
  ...rest
}: Props) {
  return (
    <Route {...rest}>
      {!isAuthenticated ? children : <Redirect to='/' />}
    </Route>
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
  //component: any;
  //props: any;
  children: any;
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