import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import { authUserLogout } from '../../../../store/auth/actions';
import {
  themeDarkTrigger,
  themeLightTrigger
} from '../../../../store/theme/actions';
import './userNav.css';

export function UserNav({
  theme,
  userIsAuthenticated,
  authname,
  authUserLogout,
  themeDarkTrigger,
  themeLightTrigger
}: Props): JSX.Element {
  const history = useHistory();

  const handleLogout = () => {
    authUserLogout();
    history.push('/home');
  };

  return (
    <div className="user-nav">
      <li>
        {theme === 'header-light' ? (
          <span
            className="mode-button"
            onClick={() => themeDarkTrigger()}
          >
            <i className="moon-symbol">☾</i> Night
          </span>
        ) : (
          <span
            className="mode-button"
            onClick={() => themeLightTrigger()}
          >
            <i className="sun-symbol">☀︎</i> Day
          </span>
        )}
      </li>

      <li>
        <Link className="user-nav-link" to="/help">
          Help
        </Link>
      </li>

      {!userIsAuthenticated && (
        <>
          <li>
            <Link className="user-nav-link" to="/register">
              Create Account
            </Link>
          </li>
          <li>
            <Link className="user-nav-link" to="/login">
              Sign In
            </Link>
          </li>
        </>
      )}

      {userIsAuthenticated && (
        <>
          <li>
            <Link className="signed-in-nav-span" to="/dashboard">
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

      {/*<li>
        <Link className="user-nav-link" to="/store/view_cart">
          Cart
        </Link>
      </li>*/}
    </div>
  );
}

interface RootState {
  auth: {
    userIsAuthenticated: boolean;
    authname: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  theme: string;
};

const mapStateToProps = (state: RootState) => ({
  userIsAuthenticated: state.auth.userIsAuthenticated,
  authname: state.auth.authname
});

const mapDispatchToProps = {
  authUserLogout: () => authUserLogout(),
  themeDarkTrigger: () => themeDarkTrigger(),
  themeLightTrigger: () => themeLightTrigger()
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(UserNav);