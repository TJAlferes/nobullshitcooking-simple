import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//import CartIcon from '../CartIcon/CartIcon';
import {
  authUserLogout,
  themeDarkTrigger,
  themeLightTrigger
} from '../../../../store/actions/index';

import './mobileUserNav.css';

class MobileUserNav extends Component {
  handleLogout = async () => {
    await this.props.authUserLogout();
    this.props.history.push('/');  // decide: move these to the sagas! (?)
  }

  render() {
    const { isAuthenticated, themeDarkTrigger, themeLightTrigger, theme } = this.props;
    return (
      <div className="mobile-user-nav">
        <li>
          {
            theme === 'header-light'
            ? (
              <span className="mode-button" onClick={() => themeDarkTrigger()}>
                <i className="moon-symbol">☾</i> Dark
              </span>
            )
            : (
              <span className="mode-button" onClick={() => themeLightTrigger()}>
                <i className="sun-symbol">☀︎</i> Light
              </span>
            )
          }
        </li>
        {
          !isAuthenticated
          ? (
            <li>
              <Link className="mobile-user-nav-link mobile_text" to="/user/login">
                Sign In
              </Link>
            </li>
          )
          : (
            <li>
              <span className="signed-in-nav-span mobile_text" onClick={this.handleLogout}>
                Sign Out
              </span>
            </li>
          )
        }
        {/*<li>
          <Link className="mobile-user-nav-link" to="/store/view_cart">
            <CartIcon />
          </Link>
        </li>*/}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  theme: state.theme.headerTheme
});

const mapDispatchToProps = dispatch => ({
  authUserLogout: () => dispatch(authUserLogout()),
  themeDarkTrigger: () => dispatch(themeDarkTrigger()),
  themeLightTrigger: () => dispatch(themeLightTrigger())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MobileUserNav));