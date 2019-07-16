import React, { lazy, Suspense } from 'react';

import './plannerPage.css'
const MobilePlannerToggle = lazy(() => import('../Planner/mobile/MobilePlannerToggle'));
const Planner = lazy(() => import('../Planner/Planner'));

const PlannerPage = props => (
  <div id="planner_page">
    <div className="mobile_display">
      <Suspense fallback={<div>Loading...</div>} >
        <MobilePlannerToggle />
      </Suspense>
    </div>
    <div className="desktop_display">
      <Suspense fallback={<div>Loading...</div>} >
        <Planner twoColumnATheme={props.twoColumnATheme} />
      </Suspense>
    </div>
  </div>
);

export default PlannerPage;