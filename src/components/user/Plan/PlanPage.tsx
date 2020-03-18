import React, { lazy, Suspense } from 'react';

const MobilePlanToggle = lazy(() => import('./MobilePlanToggle'));
const Plan = lazy(() => import('./Plan'));

import './planPage.css'

const PlanPage = ({ twoColumnATheme }) => (
  <div className="plan-page">
    <div className="mobile_display">
      <Suspense fallback={<div>Loading...</div>} >
        <MobilePlanToggle className="mobile_display" />
      </Suspense>
    </div>
    <div className="desktop_display">
      <Suspense fallback={<div>Loading...</div>} >
        <Plan
          className="desktop_display"
          twoColumnATheme={twoColumnATheme}
          planView="desktop"
        />
      </Suspense>
    </div>
  </div>
);

export default PlanPage;