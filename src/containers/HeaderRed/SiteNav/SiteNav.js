import React from 'react';

import { StyledSiteNav, StyledNavLink } from './Styles';

const openModal = e => {
  e.stopPropagation();
  console.log('working');
}

const siteNav = props => {
  const { isAuthenticated } = props;
  return (
    <StyledSiteNav>
      <li onMouseEnter={openModal}><StyledNavLink to="/food">Food</StyledNavLink></li>
      <li><StyledNavLink to="/fitness">Fitness</StyledNavLink></li>
      <li><StyledNavLink to="/store/storefront">Supply</StyledNavLink></li>
      <li><StyledNavLink to="/welcome">New? Start Here</StyledNavLink></li>
      {/*!isAuthenticated && <li><StyledNavLink to="/user/dashboard">Member Area</StyledNavLink></li>*/}
    </StyledSiteNav>
  );
}

export default siteNav;