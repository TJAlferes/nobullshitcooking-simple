import React from 'react';
import { NavLink } from 'react-router-dom';

import './logo.css';
import LightWebsiteLogo from '../../../assets/images/header/logo-slim-red.png';
import DarkWebsiteLogo from '../../../assets/images/header/logo-slim-dark-red.png';

const Logo = props => (
  <div className={`logo_area ${props.theme}`}>
    <NavLink to="/" id="logo_link">
      {
        props.theme === 'header-light'
        ? <img src={LightWebsiteLogo} id="logo_img" />
        : <img src={DarkWebsiteLogo} id="logo_img" />
      }
    </NavLink>
  </div>
);

export default Logo;