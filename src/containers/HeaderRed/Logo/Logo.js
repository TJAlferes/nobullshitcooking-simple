import React from 'react';
import { NavLink } from 'react-router-dom';

import { LogoArea } from './Styles';
import WebsiteLogo from '../../../assets/images/header/logo-slim-red.png';

const logo = () => (
  <LogoArea>
    <NavLink to="/" id="logo_link">
      <img src={WebsiteLogo} id="logo_img" />
    </NavLink>
  </LogoArea>
);

export default logo;