import React from 'react';

import { Logo } from './Logo/Logo';
import { Promo } from './Promo/Promo';
import Search from './Search/Search';
import SiteNav from './SiteNav/SiteNav';
import UserNav from './UserNav/UserNav';
import './header.css';

export function Header({ theme }: Props): JSX.Element {
  return (
    <header className={`header ${theme}`}>

      <div className="header-row-1">
        <div className="header-row-1-col-1">
          <Logo theme={theme} />
        </div>
        <div className="header-row-1-col-2">
          <Search theme={theme} />
        </div>
        <div className="header-row-1-col-3">
          <Promo />
        </div>
      </div>

      <div className="header-row-2">
        <div className="header-row-2-col-1">
          <SiteNav />
        </div>
        <div className="header-row-2-col-2">
        </div>
        <div className="header-row-2-col-3">
          <UserNav theme={theme} />
        </div>
      </div>
      
    </header>
  );
}

type Props = {
  theme: string;
};