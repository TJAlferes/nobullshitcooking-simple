import React from 'react';

import { StyledFooterGray, StyledNavLink } from './Styles';

const footerGray = () => (
  <StyledFooterGray>
    <ul>
      <li><StyledNavLink to="/site/sitemap">Sitemap</StyledNavLink></li>
      <li><StyledNavLink to="/site/disclaimer">Disclaimer</StyledNavLink></li>
      <li><StyledNavLink to="/site/terms">Terms of Use</StyledNavLink></li>
      <li><StyledNavLink to="/site/privacy">Privacy Policy</StyledNavLink></li>
      <li><StyledNavLink to="/site/help">Help</StyledNavLink></li>
    </ul>
    <p>Copyright 2015-2018 NoBullshitCooking. All rights reserved.</p>
  </StyledFooterGray>
);

export default footerGray;