import React from 'react';
import { Link } from 'react-router-dom';

import LightWebsiteLogo from '../../../../assets/images/header/logo-slim-red.png';
import DarkWebsiteLogo from '../../../../assets/images/header/logo-slim-dark-red.png';
import LightTabletLogo from '../../../../assets/images/header/logo-mobile-red.png';
import DarkTabletLogo from '../../../../assets/images/header/logo-mobile-dark-red.png';
import './logo.css';

export function Logo({ theme }: Props): JSX.Element {
  return (
    <div className={`logo ${theme}`}>
      <Link className="logo-link" to="/">
        <img
          className="logo-img-desktop"
          src={theme === 'header-light' ? LightWebsiteLogo : DarkWebsiteLogo}
        />
        <img
          className="logo-img-tablet"
          src={theme === 'header-light' ? LightTabletLogo : DarkTabletLogo}
        />
      </Link>
    </div>
  );
}

type Props = {
  theme: string;
};