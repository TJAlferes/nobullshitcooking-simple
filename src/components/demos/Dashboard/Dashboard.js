import React from 'react';

import './dashboard.css';
import LeftNav from '../../LeftNav/LeftNav';

const Dashboard = props => (
  <div id="page">
    <LeftNav />
    <article>
      <span className="demo-only-notice">
        This page is for demonstration purposes only.
        To view an actual dashboard, please create an account.
      </span>
      <h1>Dashboard</h1>
    </article>
  </div>
);

export default Dashboard;