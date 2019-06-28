import React from 'react';
import { connect } from 'react-redux';

import './mobileHeaderRed.css';
import MobileLeftNavToggle from './MobileLeftNavToggle/MobileLeftNavToggle';
import MobileLogo from './MobileLogo/MobileLogo';
import MobileSearch from './MobileSearch/MobileSearch';
//import Promo from './Promo/Promo';
import MobileSiteNav from './MobileSiteNav/MobileSiteNav';
import MobileUserNav from './MobileUserNav/MobileUserNav';

const MobileHeaderRed = props => (
  <div className={`mobile-header-red ${props.theme}`}>

    <div className="mobile-header-row-1">

      <div className="mobile-header-row-1-col-1">
        <MobileLeftNavToggle />
        <MobileLogo theme={props.theme} />
      </div>

      <div className="mobile-header-row-1-col-2">
      </div>

      <div className="mobile-header-row-1-col-3">
        <MobileUserNav />
      </div>

    </div>

    <div className="mobile-header-row-2">
      <MobileSearch theme={props.theme} />
    </div>

    <div className="mobile-header-row-3">
      <MobileSiteNav />
    </div>

  </div>
);

const mapStateToProps = state => ({theme: state.theme.headerTheme});

export default connect(mapStateToProps)(MobileHeaderRed);