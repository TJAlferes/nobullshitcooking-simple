import React from 'react';

import './mobileHeaderRed.css';
import MobileLeftNavToggle from './MobileLeftNavToggle/MobileLeftNavToggle';
import MobileLogo from './MobileLogo/MobileLogo';
import MobileSearch from './MobileSearch/MobileSearch';
//import Promo from './Promo/Promo';
import MobileSiteNav from './MobileSiteNav/MobileSiteNav';
import MobileUserNav from './MobileUserNav/MobileUserNav';

// TO DO: make separate mobile nav

const MobileHeaderRed = props => (
  <div id="mobile_header_red">

    <div id="mobile_header_row_1">
      <div id="mobile_header_row_1_col_1">
        <MobileLeftNavToggle />
        <MobileLogo />
      </div>
      <div id="mobile_header_row_1_col_2">
      </div>
      <div id="mobile_header_row_1_col_3">
        <MobileUserNav
          /*isAuthenticated={props.childProps.isAuthenticated}
          userEmail={props.childProps.userEmail}
          handleLogout={props.childProps.handleLogout}
          getUser={props.childProps.getUser}*/
        />
      </div>
    </div>

    <div id="mobile_header_row_2">
      <MobileSearch />
    </div>

    <div id="mobile_header_row_3">
      <MobileSiteNav /*isAuthenticated={props.childProps.isAuthenticated}*/ />
    </div>

  </div>
);

export default MobileHeaderRed;