import React from 'react';

import './plannerPage.css'
import MobilePlannerToggle from '../../../containers/MobilePlanner/MobilePlannerToggle';
import Planner from '../../../containers/Planner/Planner';

// TO DO: Instead of loading both, only load one or the other

// Note: this is receiving childProps (see: router)

const PlannerPage = props => (
  <div id="planner_page">
    <div className="mobile_display">
      <MobilePlannerToggle />
    </div>
    <div className="desktop_display">
      <Planner />
    </div>
  </div>
);

export default PlannerPage;