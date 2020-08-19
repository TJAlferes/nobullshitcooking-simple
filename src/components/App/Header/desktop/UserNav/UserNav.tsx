import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import {
  authStaffLogout,
  authUserLogout
} from '../../../../../store/auth/actions';
import {
  themeDarkTrigger,
  themeLightTrigger
} from '../../../../../store/theme/actions';
import './userNav.css';

export function UserNav({
  authname,
  authStaffLogout,
  authUserLogout,
  staffIsAuthenticated,
  theme,
  themeDarkTrigger,
  themeLightTrigger,
  userIsAuthenticated
}: Props): JSX.Element {
  const history = useHistory();

  const handleLogout = () => {
    if (staffIsAuthenticated) authStaffLogout();
    if (userIsAuthenticated) authUserLogout();
    history.push('/home');
  };

  return (
    <div className="user-nav">
      {theme === 'header-light' ? (
        <span className="mode-button" onClick={() => themeDarkTrigger()}>
          <i className="moon-symbol">☾</i> Night
        </span>
      ) : (
        <span className="mode-button" onClick={() => themeLightTrigger()}>
          <i className="sun-symbol">☀︎</i> Day
        </span>
      )}

      <Link className="user-nav__link" data-test="help" to="/help">Help</Link>

      {(!staffIsAuthenticated && !userIsAuthenticated) && (
        <>
          <Link className="user-nav__link" data-test="register" to="/register">
            Create Account
          </Link>

          <Link className="user-nav__link" data-test="login" to="/login">
            Sign In
          </Link>
        </>
      )}

      {staffIsAuthenticated && (
        <>
          <Link
            className="user-nav__link--authenticated"
            data-test="staff-dashboard"
            to="/staff-dashboard"
          >
            {`Hello, ${authname}`}
          </Link>

          <span
            className="user-nav__link--authenticated"
            onClick={handleLogout}
          >
            Sign Out
          </span>
        </>
      )}

      {userIsAuthenticated && (
        <>
          <Link
            className="user-nav__link--authenticated"
            data-test="dashboard"
            to="/dashboard"
          >
            {`Hello, ${authname}`}
          </Link>

          <span
            className="user-nav__link--authenticated"
            onClick={handleLogout}
          >
            Sign Out
          </span>
        </>
      )}

      {/*<Link className="user-nav__link" to="/store/view_cart">Cart</Link>*/}
    </div>
  );
}

interface RootState {
  auth: {
    authname: string;
    staffIsAuthenticated: boolean;
    userIsAuthenticated: boolean;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  theme: string;
};

const mapStateToProps = (state: RootState) => ({
  authname: state.auth.authname,
  staffIsAuthenticated: state.auth.staffIsAuthenticated,
  userIsAuthenticated: state.auth.userIsAuthenticated
});

const mapDispatchToProps = {
  authStaffLogout: () => authStaffLogout(),
  authUserLogout: () => authUserLogout(),
  themeDarkTrigger: () => themeDarkTrigger(),
  themeLightTrigger: () => themeLightTrigger()
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(UserNav);