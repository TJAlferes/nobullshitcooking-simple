import React, { lazy, Suspense } from 'react';

import './userPlannerPage.css'
const MobilePlannerToggle = lazy(() => import('../Planner/mobile/MobilePlannerToggle'));
const Planner = lazy(() => import('../Planner/Planner'));

const UserPlannerPage = props => (
  <div id="planner_page">
    <div className="mobile_display">
      <Suspense fallback={<div>Loading...</div>} >
        <MobilePlannerToggle className="mobile_display" />
      </Suspense>
    </div>
    <div className="desktop_display">
      <Suspense fallback={<div>Loading...</div>} >
        <Planner className="desktop_display" />
      </Suspense>
    </div>
  </div>
);

export default UserPlannerPage;