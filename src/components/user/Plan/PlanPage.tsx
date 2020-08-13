import React, { lazy, Suspense } from 'react';

import { LoaderSpinner } from '../../LoaderSpinner/LoaderSpinner';
//const MobilePlanToggle = lazy(() => import('./MobilePlanToggle'));
const Plan = lazy(() => import('./Plan'));
import './planPage.css'

export default function PlanPage({ twoColumnATheme }: Props): JSX.Element {
  return (
    <div className="plan-page">
      {/*<div className="mobile">
        <Suspense fallback={<LoaderSpinner />} >
          <MobilePlanToggle twoColumnATheme={twoColumnATheme} />
        </Suspense>
      </div>*/}
      <div className="desktop">
        <Suspense fallback={<LoaderSpinner />} >
          <Plan planView="desktop" twoColumnATheme={twoColumnATheme} />
        </Suspense>
      </div>
    </div>
  );
}

type Props = {
  twoColumnATheme: string;
};