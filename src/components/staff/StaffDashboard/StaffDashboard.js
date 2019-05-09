import React from 'react';
import { connect } from 'react-redux';

//import './staffDashboard.css';

const StaffDashboard = ({ authname }) => (
  <div className="dashboard">
    <p>{authname}</p>
  </div>
);

const mapStateToProps = state => ({
  authname: state.auth.authname
})

export default connect(mapStateToProps)(StaffDashboard);