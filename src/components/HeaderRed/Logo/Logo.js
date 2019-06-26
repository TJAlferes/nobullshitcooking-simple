import React from 'react';
import { Link } from 'react-router-dom';

import './logo.css';
import LightWebsiteLogo from '../../../assets/images/header/logo-slim-red.png';
import DarkWebsiteLogo from '../../../assets/images/header/logo-slim-dark-red.png';
import LightTabletLogo from '../../../assets/images/header/logo-mobile-red.png';
import DarkTabletLogo from '../../../assets/images/header/logo-mobile-dark-red.png';

//const responsiveImage = require('myImage.jpg?sizes[]=100,sizes[]=200,sizes[]=300');
//<img srcSet={responsiveImage.srcSet} src={responsiveImage.src} />
//448
//108

const Logo = props => (
  <div className={`logo-area ${props.theme}`}>
    <Link className="logo-link" to="/">
      <img
        className="logo-img-desktop"
        src={props.theme === 'header-light' ? LightWebsiteLogo : DarkWebsiteLogo}
      />
      <img
        className="logo-img-tablet"
        src={props.theme === 'header-light' ? LightTabletLogo : DarkTabletLogo}
      />
    </Link>
  </div>
);

export default Logo;