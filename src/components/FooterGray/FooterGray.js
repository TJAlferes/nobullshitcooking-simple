import React from 'react';

import { StyledFooterGray, StyledNavLink } from './Styles';

const footerGray = () => (
  <StyledFooterGray>
    <ul>
      <li><StyledNavLink to="/sitemap">Sitemap</StyledNavLink></li>
      <li><StyledNavLink to="/disclaimer">Disclaimer</StyledNavLink></li>
      <li><StyledNavLink to="/terms">Terms of Use</StyledNavLink></li>
      <li><StyledNavLink to="/privacy">Privacy Policy</StyledNavLink></li>
      <li><StyledNavLink to="/help">Help</StyledNavLink></li>
    </ul>
    <p>Copyright 2015-2018 NoBullshitCooking. All rights reserved.</p>
  </StyledFooterGray>
);

export default footerGray;