import React from 'react';
import { NavLink } from 'react-router-dom';

import './logo.css';
import WebsiteLogo from '../../../assets/images/header/logo-slim-red.png';
import MobileWebsiteLogo from '../../../assets/images/header/logo-mobile-red-small.png';

const Logo = () => (
  <div className="logo_area">
    <NavLink to="/" id="logo_link">
      <img src={WebsiteLogo} id="logo_img" />
    </NavLink>
    <NavLink to="/" id="mobile_logo_link">
      <img src={MobileWebsiteLogo} id="mobile_logo_img" />
    </NavLink>
  </div>
);

export default Logo;