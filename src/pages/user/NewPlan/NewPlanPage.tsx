import React from 'react';
import { lazy, LazyBoundary } from 'react-imported-component';

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
        <LazyBoundary fallback={<div>Loading...</div>} >
          <MobileNewPlanToggle
            editing={editing}
            twoColumnATheme={twoColumnATheme}
          />
        </LazyBoundary>
      </div>*/}
      <div className="desktop">
        <LazyBoundary fallback={<div>Loading...</div>} >
          <NewPlan
            editing={editing}
            planView="desktop"
            twoColumnATheme={twoColumnATheme}
          />
        </LazyBoundary>
      </div>
    </div>
  );
}

type Props = {
  editing: boolean;
  twoColumnATheme: string;
};