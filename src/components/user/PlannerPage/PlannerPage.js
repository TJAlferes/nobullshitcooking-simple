import React from 'react';

import './plannerPage.css'
import MobilePlannerToggle from '../../../containers/user/UserMobilePlanner/MobilePlannerToggle';
import Planner from '../../../containers/user/UserPlanner/Planner';

// TO DO: Instead of loading both, only load one or the other

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