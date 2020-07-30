import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import {
  authStaffLogout,
  authUserLogout
} from '../../../../store/auth/actions';
import {
  themeDarkTrigger,
  themeLightTrigger
} from '../../../../store/theme/actions';
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
      <li>
        {theme === 'header-light' ? (
          <span className="mode-button" onClick={() => themeDarkTrigger()}>
            <i className="moon-symbol">☾</i> Night
          </span>
        ) : (
          <span className="mode-button" onClick={() => themeLightTrigger()}>
            <i className="sun-symbol">☀︎</i> Day
          </span>
        )}
      </li>

      <li>
        <Link className="user-nav-link" data-test="help" to="/help">Help</Link>
      </li>

      {(!staffIsAuthenticated && !userIsAuthenticated) && (
        <>
          <li>
            <Link className="user-nav-link" data-test="register" to="/register">
              Create Account
            </Link>
          </li>
          <li>
            <Link className="user-nav-link" data-test="login" to="/login">
              Sign In
            </Link>
          </li>
        </>
      )}

      {staffIsAuthenticated && (
        <>
          <li>
            <Link
              className="signed-in-nav-span"
              data-test="staff-dashboard"
              to="/staff-dashboard"
            >
              {`Hello, ${authname}`}
            </Link>
          </li>
          <li>
            <span className="signed-in-nav-span" onClick={handleLogout}>
              Sign Out
            </span>
          </li>
        </>
      )}

      {userIsAuthenticated && (
        <>
          <li>
            <Link
              className="signed-in-nav-span"
              data-test="dashboard"
              to="/dashboard"
            >
              {`Hello, ${authname}`}
            </Link>
          </li>
          <li>
            <span className="signed-in-nav-span" onClick={handleLogout}>
              Sign Out
            </span>
          </li>
        </>
      )}

      {/*
      <li>
        <Link className="user-nav-link" to="/store/view_cart">Cart</Link>
      </li>
      */}
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