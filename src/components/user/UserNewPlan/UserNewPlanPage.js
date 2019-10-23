import React, { lazy, Suspense } from 'react';

import './userNewPlanPage.css'
const MobileUserNewPlanToggle = lazy(() => import('./mobile/MobileUserNewPlanToggle'));
const UserNewPlan = lazy(() => import('./desktop/UserNewPlan'));

const UserNewPlanPage = props => (
  <div className="user-new-plan-page">
    <div className="mobile_display">
      <Suspense fallback={<div>Loading...</div>} >
        <MobileUserNewPlanToggle
          className="mobile_display"
          editing={
            (props.childProps && props.childProps.editing) &&
            props.childProps.editing
          }
        />
      </Suspense>
    </div>
    <div className="desktop_display">
      <Suspense fallback={<div>Loading...</div>} >
        <UserNewPlan
          className="desktop_display"
          twoColumnATheme={props.twoColumnATheme}
          editing={
            (props.childProps && props.childProps.editing) &&
            props.childProps.editing
          }
        />
      </Suspense>
    </div>
  </div>
);

export default UserNewPlanPage;