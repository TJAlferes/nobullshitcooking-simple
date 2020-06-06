import React, { lazy, Suspense } from 'react';

//const MobileMessengerToggle = lazy(() => import('./MobileMessengerToggle'));
const Messenger = lazy(() => import('./Messenger'));
import './messengerPage.css'

export default function MessengerPage({ twoColumnATheme }: Props): JSX.Element {
  return (
    <div id="messenger_page">
      {/*<div className="mobile_display">
        <Suspense fallback={<div>Loading...</div>} >
          <MobileMessengerToggle twoColumnATheme={twoColumnATheme} />
        </Suspense>
      </div>*/}
      <div className="desktop_display">
        <Suspense fallback={<div>Loading...</div>} >
          <Messenger
            twoColumnATheme={twoColumnATheme}
            messengerView="desktop"
          />
        </Suspense>
      </div>
    </div>
  );
}

type Props = {
  twoColumnATheme: string;
};