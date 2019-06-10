import React from 'react';
import { connect } from 'react-redux';

import './headerRed.css';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Promo from './Promo/Promo';
import SiteNav from './SiteNav/SiteNav';
import UserNav from './UserNav/UserNav';

const HeaderRed = props => (
  <div className={`header_red ${props.theme}`}>

    <div id="header_row_1">
      <div id="header_row_1_col_1">
        <Logo theme={props.theme} />
      </div>
      <div id="header_row_1_col_2">
        <Search theme={props.theme} />
      </div>
      <div id="header_row_1_col_3">
        <Promo />
      </div>
    </div>

    <div id="header_row_2">
      <div id="header_row_2_col_1">
        <SiteNav />
      </div>
      <div id="header_row_2_col_2">
      </div>
      <div id="header_row_2_col_3">
        <UserNav />
      </div>
    </div>
    
  </div>
);

const mapStateToProps = state => ({
  theme: state.theme.headerTheme
});

export default connect(mapStateToProps)(HeaderRed);