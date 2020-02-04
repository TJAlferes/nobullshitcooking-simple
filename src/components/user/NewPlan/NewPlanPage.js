import React, { lazy, Suspense } from 'react';

const MobileNewPlanToggle = lazy(() => import('./MobileNewPlanToggle'));
const NewPlan = lazy(() => import('./NewPlan'));

import './newPlanPage.css'

const NewPlanPage = ({ twoColumnATheme, childProps }) => (
  <div className="new-plan-page">
    <div className="mobile_display">
      <Suspense fallback={<div>Loading...</div>} >
        <MobileNewPlanToggle
          className="mobile_display"
          editing={(childProps && childProps.editing) && childProps.editing}
        />
      </Suspense>
    </div>
    <div className="desktop_display">
      <Suspense fallback={<div>Loading...</div>} >
        <NewPlan
          className="desktop_display"
          twoColumnATheme={twoColumnATheme}
          planView={desktop}
          editing={(childProps && childProps.editing) && childProps.editing}
        />
      </Suspense>
    </div>
  </div>
);

export default NewPlanPage;