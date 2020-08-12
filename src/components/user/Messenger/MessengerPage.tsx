import React, { lazy, Suspense } from 'react';

//const MobileMessengerToggle = lazy(() => import('./MobileMessengerToggle'));
const Messenger = lazy(() => import('./Messenger'));
import './messengerPage.css'

export default function MessengerPage({ twoColumnATheme }: Props): JSX.Element {
  return (
    <div id="messenger-page">
      {/* just do responsive design instead of adaptive design? */}

      {/*<div className="mobile">
        <Suspense fallback={<div>Loading...</div>} >
          <MobileMessengerToggle twoColumnATheme={twoColumnATheme} />
        </Suspense>
      </div>*/}

      <div className="desktop">
        <Suspense fallback={<div>Loading...</div>} >
          <Messenger
            //messengerView="desktop"
            twoColumnATheme={twoColumnATheme}
          />
        </Suspense>
      </div>
    </div>
  );
}

type Props = {
  twoColumnATheme: string;
};