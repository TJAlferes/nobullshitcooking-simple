import React, { lazy, Suspense } from 'react';

const MobileUserNewPlanToggle = lazy(() => import('./mobile/MobileUserNewPlanToggle'));
const UserNewPlan = lazy(() => import('./desktop/UserNewPlan'));

import './userNewPlanPage.css'

const UserNewPlanPage = ({ twoColumnATheme, childProps }) => (
  <div className="user-new-plan-page">
    <div className="mobile_display">
      <Suspense fallback={<div>Loading...</div>} >
        <MobileUserNewPlanToggle
          className="mobile_display"
          editing={(childProps && childProps.editing) && childProps.editing}
        />
      </Suspense>
    </div>
    <div className="desktop_display">
      <Suspense fallback={<div>Loading...</div>} >
        <UserNewPlan
          className="desktop_display"
          twoColumnATheme={twoColumnATheme}
          editing={(childProps && childProps.editing) && childProps.editing}
        />
      </Suspense>
    </div>
  </div>
);

export default UserNewPlanPage;