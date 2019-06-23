import React from 'react';
import { Link } from 'react-router-dom';

import './logo.css';
import LightWebsiteLogo from '../../../assets/images/header/logo-slim-red.png';
import DarkWebsiteLogo from '../../../assets/images/header/logo-slim-dark-red.png';

const Logo = props => (
  <div className={`logo-area ${props.theme}`}>
    <Link className="logo-link" to="/">
      {
        props.theme === 'header-light'
        ? <img className="logo-img" src={LightWebsiteLogo} />
        : <img className="logo-img" src={DarkWebsiteLogo} />
      }
    </Link>
  </div>
);

export default Logo;