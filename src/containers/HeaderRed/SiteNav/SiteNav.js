import React from 'react';
import { connect } from 'react-redux';

import { StyledSiteNav, StyledNavLink } from './Styles';

const siteNav = props => {
  //const { isAuthenticated } = props;

  const displayDropdown = e => {
    e.stopPropagation();
    console.log('working');
    props.dispatch(
      openModal({
        id: uuid.v4(),
        type: 'custom',
        content: <CustomModalContent />
      })
    );
  }

  return (
    <StyledSiteNav>
      <li><StyledNavLink to="/food">Food</StyledNavLink></li>
      <li><StyledNavLink to="/fitness">Fitness</StyledNavLink></li>
      <li><StyledNavLink to="/store/storefront">Supply</StyledNavLink></li>
      <li><StyledNavLink to="/welcome">New? Start Here</StyledNavLink></li>
      {/*!isAuthenticated && <li><StyledNavLink to="/user/dashboard">Member Area</StyledNavLink></li>*/}
    </StyledSiteNav>
  );
}

const mapDispatchToProps = dispatch => ({
  dispatch
});

export default connect(null, mapDispatchToProps)(siteNav);