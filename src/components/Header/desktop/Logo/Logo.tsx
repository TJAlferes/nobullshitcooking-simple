import React from 'react';
import { Link } from 'react-router-dom';

import LogoLargeLight from '../../../../assets/images/header/logo-slim-red.png';
import LogoLargeDark from '../../../../assets/images/header/logo-slim-dark-red.png';
import LogoSmallLight from '../../../../assets/images/header/logo-mobile-red.png';
import LogoSmallDark from '../../../../assets/images/header/logo-mobile-dark-red.png';
import './logo.css';

export function Logo({ theme }: Props): JSX.Element {
  return (
    <div className={`logo ${theme}`}>
      <Link className="logo__home-links" to="/">
        <img
          className="home-link--large"
          src={theme === 'header-light' ? LogoLargeLight : LogoLargeDark}
        />
        <img
          className="home-link--small"
          src={theme === 'header-light' ? LogoSmallLight : LogoSmallDark}
        />
      </Link>
    </div>
  );
}

type Props = {
  theme: string;
};