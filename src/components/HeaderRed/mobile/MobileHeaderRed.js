import React from 'react';

import './mobileHeaderRed.css';
import MobileLeftNavToggle from './MobileLeftNavToggle/MobileLeftNavToggle';
import MobileLogo from './MobileLogo/MobileLogo';
import MobileSearch from './MobileSearch/MobileSearch';
import MobileUserNav from './MobileUserNav/MobileUserNav';

const MobileHeaderRed = ({ theme }) => (
  <div className={`mobile-header-red ${theme}`}>
    <div className="mobile-header-row-1">
      <div className="mobile-header-row-1-col-1">
        <MobileLeftNavToggle />
        <MobileLogo theme={theme} />
      </div>
      <div className="mobile-header-row-1-col-2">
      </div>
      <div className="mobile-header-row-1-col-3">
        <MobileUserNav />
      </div>
    </div>
    <div className="mobile-header-row-2">
      <MobileSearch theme={theme} />
    </div>
  </div>
);

export default MobileHeaderRed;