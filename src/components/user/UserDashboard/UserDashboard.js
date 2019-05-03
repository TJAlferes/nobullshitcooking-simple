import React from 'react';
import { connect } from 'react-redux';

//import './userDashboard.css';

const UserDashboard = ({ authname }) => (
  <div className="dashboard">
    <p>{authname}</p>
  </div>
);

const mapStateToProps = state => ({
  authname: state.auth.authname
})

export default connect(mapStateToProps)(UserDashboard);