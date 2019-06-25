import React from 'react';
import { connect } from 'react-redux';

import './headerRed.css';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Promo from './Promo/Promo';
import SiteNav from './SiteNav/SiteNav';
import UserNav from './UserNav/UserNav';

const HeaderRed = props => (
  <header className={`headerred ${props.theme}`}>

    <div className="header-row-1">

      <div className="header-row-1-col-1">
        <Logo theme={props.theme} />
      </div>

      <div className="header-row-1-col-2">
        <Search theme={props.theme} />
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

const mapStateToProps = state => ({theme: state.theme.headerTheme});

export default connect(mapStateToProps)(HeaderRed);