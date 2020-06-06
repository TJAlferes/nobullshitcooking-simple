import React, { lazy, Suspense } from 'react';

//const MobilePlanToggle = lazy(() => import('./MobilePlanToggle'));
const Plan = lazy(() => import('./Plan'));
import './planPage.css'

export default function PlanPage({ twoColumnATheme }: Props): JSX.Element {
  return (
    <div className="plan-page">
      {/*<div className="mobile_display">
        <Suspense fallback={<div>Loading...</div>} >
          <MobilePlanToggle twoColumnATheme={twoColumnATheme} />
        </Suspense>
      </div>*/}
      <div className="desktop_display">
        <Suspense fallback={<div>Loading...</div>} >
          <Plan
            twoColumnATheme={twoColumnATheme}
            planView="desktop"
          />
        </Suspense>
      </div>
    </div>
  );
}

type Props = {
  twoColumnATheme: string;
};