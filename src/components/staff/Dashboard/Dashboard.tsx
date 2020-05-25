import React from 'react';
import { connect } from 'react-redux';

//import './dashboard.css';

const Dashboard = ({ authname }) => (
  <div className="dashboard">
    <p>{authname}</p>
  </div>
);

const mapStateToProps = state => ({
  authname: state.auth.authname
})

export default connect(mapStateToProps)(Dashboard);