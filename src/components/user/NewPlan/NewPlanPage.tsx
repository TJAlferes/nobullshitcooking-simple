import React, { lazy, Suspense } from 'react';

//const MobileNewPlanToggle = lazy(() => import('./MobileNewPlanToggle'));
const NewPlan = lazy(() => import('./NewPlan'));
import './newPlanPage.css'

export default function NewPlanPage({
  editing,
  twoColumnATheme
}: Props): JSX.Element {
  return (
    <div className="new-plan-page">
      {/*<div className="mobile">
        <Suspense fallback={<div>Loading...</div>} >
          <MobileNewPlanToggle
            editing={editing}
            twoColumnATheme={twoColumnATheme}
          />
        </Suspense>
      </div>*/}
      <div className="desktop">
        <Suspense fallback={<div>Loading...</div>} >
          <NewPlan
            editing={editing}
            planView="desktop"
            twoColumnATheme={twoColumnATheme}
          />
        </Suspense>
      </div>
    </div>
  );
}

type Props = {
  editing: boolean;
  twoColumnATheme: string;
};