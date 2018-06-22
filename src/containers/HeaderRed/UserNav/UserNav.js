import React, { Component, Fragment } from 'react';
import { Auth } from 'aws-amplify';

import { StyledUserNav, StyledNavLink } from './Styles';

class UserNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <StyledUserNav>
        <li><StyledNavLink to="/content/help">Help</StyledNavLink></li>
        {
          !isAuthenticated
          ? (
            <Fragment>
              <li><StyledNavLink to="/user/register">Create Account</StyledNavLink></li>
              <li><StyledNavLink to="/user/login">Sign In</StyledNavLink></li>
            </Fragment>
          )
          : <li><StyledNavLink to="/user/logout">Sign Out</StyledNavLink></li>
        }
        <li><StyledNavLink to="/store/view_cart">View Cart</StyledNavLink></li>
      </StyledUserNav>
    );
  }
}

export default UserNav;