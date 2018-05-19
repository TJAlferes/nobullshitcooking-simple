import React from 'react';

import { StyledFooterGray, StyledNavLink } from './Styles';

const footerGray = () => (
  <StyledFooterGray>
    <ul>
      <li><StyledNavLink to="/">Sitemap</StyledNavLink></li>
      <li><StyledNavLink to="/">Disclaimer</StyledNavLink></li>
      <li><StyledNavLink to="/">Terms of Use</StyledNavLink></li>
      <li><StyledNavLink to="/">Privacy Policy</StyledNavLink></li>
      <li><StyledNavLink to="/">Help</StyledNavLink></li>
    </ul>
    <p>Copyright 2015-2018 NoBullshitCooking. All rights reserved.</p>
  </StyledFooterGray>
);

export default footerGray;