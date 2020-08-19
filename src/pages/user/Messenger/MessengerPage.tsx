import React from 'react';
import { lazy, LazyBoundary } from 'react-imported-component';

//const MobileMessengerToggle = lazy(() => import('./MobileMessengerToggle'));
const Messenger = lazy(() => import('./Messenger'));
import './messengerPage.css'

export default function MessengerPage({ twoColumnATheme }: Props): JSX.Element {
  return (
    <div id="messenger-page">
      {/* just do responsive design instead of adaptive design? */}

      {/*<div className="mobile">
        <LazyBoundary fallback={<div>Loading...</div>} >
          <MobileMessengerToggle twoColumnATheme={twoColumnATheme} />
        </LazyBoundary>
      </div>*/}

      <div className="desktop">
        <LazyBoundary fallback={<div>Loading...</div>} >
          <Messenger
            //messengerView="desktop"
            twoColumnATheme={twoColumnATheme}
          />
        </LazyBoundary>
      </div>
    </div>
  );
}

type Props = {
  twoColumnATheme: string;
};