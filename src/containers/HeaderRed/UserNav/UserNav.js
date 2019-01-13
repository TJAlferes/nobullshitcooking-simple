import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
//import { Auth } from 'aws-amplify';

import './userNav.css';

class UserNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated, handleLogout, getUser, userEmail } = this.props;
    return (
      <div className="user_nav">
        <li>
          <NavLink className="styled_nav_link" to="/help">
            Help
          </NavLink>
        </li>
        {
          !isAuthenticated
          ? (
            <Fragment>
              <li>
                <NavLink className="styled_nav_link" to="/user/register">
                  Create Account
                </NavLink>
              </li>
              <li>
                <NavLink className="styled_nav_link" to="/user/login">
                  Sign In
                </NavLink>
              </li>
            </Fragment>
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
            View Cart
          </NavLink>
        </li>
      </div>
    );
  }
}

export default UserNav;