import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
//import { Auth } from 'aws-amplify';

import './mobileUserNav.css';
import CartIcon from '../CartIcon/CartIcon';

class MobileUserNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated, handleLogout, getUser, userEmail } = this.props;
    return (
      <div id="mobile_user_nav">
        {
          !isAuthenticated
          ? (
            <li>
              <NavLink className="styled_nav_link" to="/user/login">
                Sign In
              </NavLink>
            </li>
          )
          : (
            <Fragment>
              <li>
                <span className="signed_in_nav_span">
                  {`Hello, ${userEmail}`}
                </span>
              </li>
              <li>
                <span className="signed_in_nav_span" onClick={handleLogout}>
                  Sign Out
                </span>
              </li>
            </Fragment>
          )
        }
        <li>
          <NavLink className="styled_nav_link" to="/store/view_cart">
            <CartIcon />
          </NavLink>
        </li>
      </div>
    );
  }
}

export default MobileUserNav;