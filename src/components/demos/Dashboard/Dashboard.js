import React from 'react';

import './dashboard.css';
import LeftNav from '../../LeftNav/LeftNav';

const Dashboard = props => (
  <div className={`dashboard two-column-a ${props.twoColumnATheme}`}>
    <LeftNav />
    <section>
      <span className="demo-only-notice">
        This page is for demonstration purposes only.
        To view an actual dashboard, please create an account.
      </span>
      <h1>Dashboard</h1>
    </section>
  </div>
);

export default Dashboard;