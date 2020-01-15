import React, { lazy, Suspense } from 'react';

const MobileUserMessengerToggle = lazy(() => import('./mobile/MobileUserMessengerToggle'));
const UserMessenger = lazy(() => import('./desktop/UserMessenger'));

import './userMessengerPage.css'

const UserMessengerPage = ({ twoColumnATheme }) => (
  <div id="messenger_page">
    <div className="mobile_display">
      <Suspense fallback={<div>Loading...</div>} >
        <MobileUserMessengerToggle className="mobile_display" />
      </Suspense>
    </div>
    <div className="desktop_display">
      <Suspense fallback={<div>Loading...</div>} >
        <UserMessenger twoColumnATheme={twoColumnATheme} />
      </Suspense>
    </div>
  </div>
);

export default UserMessengerPage;