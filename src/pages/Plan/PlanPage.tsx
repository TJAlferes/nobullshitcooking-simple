import React from 'react';
import { lazy, LazyBoundary } from 'react-imported-component';

import { LoaderSpinner } from '../../components/LoaderSpinner/LoaderSpinner';
//const MobilePlanToggle = lazy(() => import('./MobilePlanToggle'));
const Plan = lazy(() => import('./Plan'));
import './planPage.css'

export default function PlanPage({ twoColumnATheme }: Props): JSX.Element {
  return (
    <div className="plan-page">
      {/*<div className="mobile">
        <LazyBoundary fallback={<LoaderSpinner />} >
          <MobilePlanToggle twoColumnATheme={twoColumnATheme} />
        </LazyBoundary>
      </div>*/}
      <div className="desktop">
        <LazyBoundary fallback={<LoaderSpinner />} >
          <Plan planView="desktop" twoColumnATheme={twoColumnATheme} />
        </LazyBoundary>
      </div>
    </div>
  );
}

type Props = {
  twoColumnATheme: string;
};