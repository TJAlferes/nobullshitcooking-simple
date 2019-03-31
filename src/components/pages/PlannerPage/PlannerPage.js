import React from 'react';

import './plannerPage.css'
import MobilePlannerToggle from '../../../containers/MobilePlanner/MobilePlannerToggle';
import Planner from '../../../containers/Planner/Planner';

// TO DO: Instead of loading both, only load one or the other

// Note: this is receiving childProps (see: router)

const PlannerPage = props => (
  <div id="planner_page">
    <div className="mobile_display">
      <MobilePlannerToggle className="mobile_display" />
    </div>
    <div className="desktop_display">
      <Planner className="desktop_display" />
    </div>
  </div>
);

export default PlannerPage;