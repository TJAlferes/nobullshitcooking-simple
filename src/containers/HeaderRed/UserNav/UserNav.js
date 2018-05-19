import React from 'react';

import { StyledUserNav, StyledNavLink } from './Styles';

const userNav = props => (
  <StyledUserNav>
    <li><StyledNavLink to="/content/help">Help</StyledNavLink></li>
    <li><StyledNavLink to="/user/register">Create Account</StyledNavLink></li>
    <li><StyledNavLink to="/user/login">Sign In</StyledNavLink></li>
    <li><StyledNavLink to="/store/view_cart">View Cart</StyledNavLink></li>
  </StyledUserNav>
);

export default userNav;