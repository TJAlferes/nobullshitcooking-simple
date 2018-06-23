import React, { Component, Fragment } from 'react';
//import { Auth } from 'aws-amplify';

import { StyledUserNav, StyledNavLink, SignedInNavSpan } from './Styles';

class UserNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isAuthenticated, handleLogout, getUser } = this.props;
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
          : (
            <Fragment>
              <li><SignedInNavSpan>{`Hello, ${getUser()}`}</SignedInNavSpan></li>
              <li><SignedInNavSpan onClick={handleLogout}>Sign Out</SignedInNavSpan></li>
            </Fragment>
          )
        }
        <li><StyledNavLink to="/store/view_cart">View Cart</StyledNavLink></li>
      </StyledUserNav>
    );
  }
}

export default UserNav;