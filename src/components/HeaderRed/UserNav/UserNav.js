import React, { Component, Fragment } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './userNav.css';
import { authUserLogout, themeDarkTrigger, themeLightTrigger } from '../../../store/actions/index';

class UserNav extends Component {
  handleLogout = async () => {
    await this.props.authUserLogout();
    this.props.history.push('/');  // move these to the sagas!
  }

  render() {
    const { isAuthenticated, authname, theme } = this.props;
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
                <NavLink className="signed_in_nav_span" to="/user/dashboard">
                  {`Hello, ${authname}`}
                </NavLink>
              </li>
              <li>
                <span className="signed_in_nav_span" onClick={this.handleLogout}>
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
        <li>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </li>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  authname: state.auth.authname,
  theme: state.theme.theme
});

const mapDispatchToProps = dispatch => ({
  authUserLogout: () => dispatch(authUserLogout()),
  themeDarkTrigger: () => dispatch(themeDarkTrigger()),
  themeLightTrigger: () => dispatch(themeLightTrigger())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserNav));