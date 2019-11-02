import React, { lazy, Suspense } from 'react';

import './userMessengerPage.css'
const MobileUserMessengerToggle = lazy(() => import('./mobile/MobileUserMessengerToggle'));
const UserMessenger = lazy(() => import('./desktop/UserMessenger'));

const UserMessengerPage = props => (
  <div id="messenger_page">
    <div className="mobile_display">
      <Suspense fallback={<div>Loading...</div>} >
        <MobileUserMessengerToggle className="mobile_display" />
      </Suspense>
    </div>
    <div className="desktop_display">
      <Suspense fallback={<div>Loading...</div>} >
        <UserMessenger twoColumnATheme={props.twoColumnATheme} />
      </Suspense>
    </div>
  </div>
);

export default UserMessengerPage;