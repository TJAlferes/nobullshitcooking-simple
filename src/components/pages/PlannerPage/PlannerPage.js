import React from 'react';

import './plannerPage.css'
import MobilePlannerToggle from '../../../containers/MobilePlanner/MobilePlannerToggle';
import Planner from '../../../containers/Planner/Planner';

// TO DO: Instead of loading both, only load one or the other

// Note: this is receiving childProps (see: router)

const PlannerPage = props => (
  <div id="planner_page">
    <MobilePlannerToggle className="mobile_display">Open Planner</MobilePlannerToggle>
    <Planner className="desktop_display" />
  </div>
);

export default PlannerPage;