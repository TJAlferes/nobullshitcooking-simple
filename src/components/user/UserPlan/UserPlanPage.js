import React, { lazy, Suspense } from 'react';

const MobileUserPlanToggle = lazy(() => import('./mobile/MobileUserPlanToggle'));
const UserPlan = lazy(() => import('./desktop/UserPlan'));

import './userPlanPage.css'

const UserPlanPage = ({ twoColumnATheme }) => (
  <div className="user-plan-page">
    <div className="mobile_display">
      <Suspense fallback={<div>Loading...</div>} >
        <MobileUserPlanToggle className="mobile_display" />
      </Suspense>
    </div>
    <div className="desktop_display">
      <Suspense fallback={<div>Loading...</div>} >
        <UserPlan className="desktop_display" twoColumnATheme={twoColumnATheme} />
      </Suspense>
    </div>
  </div>
);

export default UserPlanPage;