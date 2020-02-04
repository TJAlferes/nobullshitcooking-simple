import React, { lazy, Suspense } from 'react';

const MobileMessengerToggle = lazy(
  () => import('./mobile/MobileMessengerToggle')
);
const Messenger = lazy(() => import('./desktop/Messenger'));

import './messengerPage.css'

const MessengerPage = ({ twoColumnATheme }) => (
  <div id="messenger_page">
    <div className="mobile_display">
      <Suspense fallback={<div>Loading...</div>} >
        <MobileMessengerToggle className="mobile_display" />
      </Suspense>
    </div>
    <div className="desktop_display">
      <Suspense fallback={<div>Loading...</div>} >
        <Messenger twoColumnATheme={twoColumnATheme} />
      </Suspense>
    </div>
  </div>
);

export default MessengerPage;