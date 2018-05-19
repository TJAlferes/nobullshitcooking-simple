import React from 'react';

import { StyledSiteNav, StyledNavLink } from './Styles';

const siteNav = props => (
  <StyledSiteNav>
    <li><StyledNavLink to="/content/food">Food</StyledNavLink></li>
    <li><StyledNavLink to="/content/fitness">Fitness</StyledNavLink></li>
    <li><StyledNavLink to="/store/storefront">Supply</StyledNavLink></li>
    <li><StyledNavLink to="/user/dashboard">Member Area</StyledNavLink></li>
  </StyledSiteNav>
);

export default siteNav;