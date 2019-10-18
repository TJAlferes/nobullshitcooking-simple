import React, { lazy, Suspense } from 'react';

import './planPage.css'
const MobilePlanToggle = lazy(() => import('./mobile/MobilePlanToggle'));
const Plan = lazy(() => import('./desktop/Plan'));

const PlanPage = props => (
  <div className="plan-page">
    <div className="mobile_display">
      <Suspense fallback={<div>Loading...</div>} >
        <MobilePlanToggle />
      </Suspense>
    </div>
    <div className="desktop_display">
      <Suspense fallback={<div>Loading...</div>} >
        <Plan twoColumnATheme={props.twoColumnATheme} />
      </Suspense>
    </div>
  </div>
);

export default PlanPage;