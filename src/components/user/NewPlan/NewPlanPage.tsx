import React, { lazy, Suspense } from 'react';

const MobileNewPlanToggle = lazy(() => import('./MobileNewPlanToggle'));
const NewPlan = lazy(() => import('./NewPlan'));
import './newPlanPage.css'

export default function NewPlanPage({
  twoColumnATheme,
  childProps
}: Props): JSX.Element {
  return (
    <div className="new-plan-page">
      <div className="mobile_display">
        <Suspense fallback={<div>Loading...</div>} >
          <MobileNewPlanToggle
            twoColumnATheme={twoColumnATheme}
            editing={(childProps && childProps.editing) && childProps.editing}
          />
        </Suspense>
      </div>
      <div className="desktop_display">
        <Suspense fallback={<div>Loading...</div>} >
          <NewPlan
            twoColumnATheme={twoColumnATheme}
            editing={(childProps && childProps.editing) && childProps.editing}
            planView="desktop"
          />
        </Suspense>
      </div>
    </div>
  );
}

type Props = {
  twoColumnATheme: string;
  childProps: any;
};