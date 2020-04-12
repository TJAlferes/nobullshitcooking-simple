import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  authUserLogout,
  themeDarkTrigger,
  themeLightTrigger
} from '../../../../store/actions/index';

import './userNav.css';

export const UserNav = ({
  theme,
  isAuthenticated,
  authname,
  authUserLogout,
  themeDarkTrigger,
  themeLightTrigger
}) => {
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

      {!isAuthenticated && (
        <li>
          <Link className="user-nav-link" to="/register">
            Create Account
          </Link>
        </li>
      )}

      {!isAuthenticated && (
        <li>
          <Link className="user-nav-link" to="/login">
            Sign In
          </Link>
        </li>
      )}

      {isAuthenticated && (
        <li>
          <Link className="signed-in-nav-span" to="/dashboard">
            {`Hello, ${authname}`}
          </Link>
        </li>
      )}

      {isAuthenticated && (
        <li>
          <span className="signed-in-nav-span" onClick={handleLogout}>
            Sign Out
          </span>
        </li>
      )}

      {/*<li>
        <Link className="user-nav-link" to="/store/view_cart">
          Cart
        </Link>
      </li>*/}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  authname: state.auth.authname
});

const mapDispatchToProps = dispatch => ({
  authUserLogout: () => dispatch(authUserLogout()),
  themeDarkTrigger: () => dispatch(themeDarkTrigger()),
  themeLightTrigger: () => dispatch(themeLightTrigger())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);