import React from 'react';
import { NavLink } from 'react-router-dom';

import './mobileLogo.css';
import LightMobileLogo from '../../../../assets/images/header/logo-mobile-red-small.png';
import DarkMobileLogo from '../../../../assets/images/header/logo-mobile-dark-red-small.png';

const MobileLogo = props => (
  <div className={`mobile-logo ${props.theme}`}>
    <NavLink className="mobile-logo-link" to="/">
      <img
        className="mobile-logo-img"
        src={props.theme === 'header-light' ? LightMobileLogo : DarkMobileLogo}
      />
    </NavLink>
  </div>
);

export default MobileLogo;