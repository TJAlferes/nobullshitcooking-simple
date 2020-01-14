import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  authUserLogout,
  themeDarkTrigger,
  themeLightTrigger
} from '../../../../store/actions/index';

import './userNav.css';

class UserNav extends Component {
  handleLogout = async () => {
    await this.props.authUserLogout();
    this.props.history.push('/');  // decide: move these to the sagas! (?)
  }

  render() {
    const { isAuthenticated, authname, themeDarkTrigger, themeLightTrigger, theme } = this.props;
    return (
      <div className="user-nav">
        <li>
          {
            theme === 'header-light'
            ? (
              <span className="mode-button" onClick={() => themeDarkTrigger()}>
                <i className="moon-symbol">☾</i> Dark Mode
              </span>
            )
            : (
              <span className="mode-button" onClick={() => themeLightTrigger()}>
                <i className="sun-symbol">☀︎</i> Light Mode
              </span>
            )
          }
        </li>
        <li>
          <Link className="user-nav-link" to="/help">
            Help
          </Link>
        </li>
        {
          !isAuthenticated
          ? (
            <Fragment>
              <li>
                <Link className="user-nav-link" to="/user/register">
                  Create Account
                </Link>
              </li>
              <li>
                <Link className="user-nav-link" to="/user/login">
                  Sign In
                </Link>
              </li>
            </Fragment>
          )
          : (
            <Fragment>
              <li>
                <Link className="signed-in-nav-span" to="/user/dashboard">
                  {`Hello, ${authname}`}
                </Link>
              </li>
              <li>
                <span className="signed-in-nav-span" onClick={this.handleLogout}>
                  Sign Out
                </span>
              </li>
            </Fragment>
          )
        }
        {/*<li>
          <Link className="user-nav-link" to="/store/view_cart">
            View Cart
          </Link>
        </li>*/}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  authname: state.auth.authname,
  theme: state.theme.headerTheme
});

const mapDispatchToProps = dispatch => ({
  authUserLogout: () => dispatch(authUserLogout()),
  themeDarkTrigger: () => dispatch(themeDarkTrigger()),
  themeLightTrigger: () => dispatch(themeLightTrigger())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserNav));