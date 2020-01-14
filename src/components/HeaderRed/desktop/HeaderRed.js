import React from 'react';

import Logo from './Logo/Logo';
import Search from './Search/Search';
import Promo from './Promo/Promo';
import SiteNav from './SiteNav/SiteNav';
import UserNav from './UserNav/UserNav';

import './headerRed.css';

const HeaderRed = ({ theme }) => (
  <header className={`headerred ${theme}`}>
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
        <UserNav />
      </div>
    </div>
  </header>
);

export default HeaderRed;