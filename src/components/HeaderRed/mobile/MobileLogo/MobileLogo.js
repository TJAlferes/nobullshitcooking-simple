import React from 'react';
import { NavLink } from 'react-router-dom';

import './mobileLogo.css';
import MobileWebsiteLogo from '../../../assets/images/header/logo-mobile-red-small.png';

const MobileLogo = () => (
  <div className="mobile_logo_area">
    <NavLink to="/" id="mobile_logo_link">
      <img src={MobileWebsiteLogo} id="mobile_logo_img" />
    </NavLink>
  </div>
);

export default MobileLogo;