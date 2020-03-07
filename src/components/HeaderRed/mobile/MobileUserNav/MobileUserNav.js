import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  authUserLogout,
  themeDarkTrigger,
  themeLightTrigger
} from '../../../../store/actions/index';

//import CartIcon from '../CartIcon/CartIcon';

import './mobileUserNav.css';

export const MobileUserNav = ({
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
  }

  return (
    <div className="mobile-user-nav">
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

      {!isAuthenticated ? (
        <li>
          <Link
            className="mobile-user-nav-link mobile_text"
            to="/login"
          >
            Sign In
          </Link>
        </li>
      ) : (
        <li>
          <span
            className="signed-in-nav-span mobile_text"
            onClick={handleLogout}
          >
            Sign Out
          </span>
        </li>
      )}

      {/*<li>
        <Link className="mobile-user-nav-link" to="/store/view_cart">
          <CartIcon />
        </Link>
      </li>*/}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  theme: state.theme.headerTheme
});

const mapDispatchToProps = dispatch => ({
  authUserLogout: () => dispatch(authUserLogout()),
  themeDarkTrigger: () => dispatch(themeDarkTrigger()),
  themeLightTrigger: () => dispatch(themeLightTrigger())
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileUserNav);