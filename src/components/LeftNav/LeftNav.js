import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './leftNav.css';

const LeftNav = props => {
  const { authname, isAuthenticated } = props;
  return (
    <div className="left_nav">

      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/dashboard"><span>Dashboard</span></NavLink>
        : <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/user/dashboard"><span>{authname}</span></NavLink>
      }
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/planner"><span id="planner_span">Planner</span></NavLink>
        : <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/user/planner"><span id="planner_span">Planner</span></NavLink>
      }

      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/" exact><span id="home_span">News</span></NavLink>
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/messenger"><span>Messenger</span></NavLink>
        : <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/user/messenger"><span id="messenger_span">Messenger</span></NavLink>
      }
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/friends"><span>Friends</span></NavLink>
        : <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/user/friends"><span>Friends</span></NavLink>
      }

      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/food/nutrition/supplements"><span id="supplements_span">Supplements</span></NavLink>
      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/supply/kitchen-equipment"><span>Equipment</span></NavLink>

      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/supply/"><span>Water Filtration</span></NavLink>
      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/supply/tea"><span>Tea</span></NavLink>
      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/supply/coffee"><span>Coffee</span></NavLink>

      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/supply/outdoors"><span>Outdoors</span></NavLink>
      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/supply/garden"><span>Garden</span></NavLink>
      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/supply/tools"><span>Tools</span></NavLink>

      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/contests"><span>Contest Winners</span></NavLink>
      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/seasonal"><span>Food for Summer</span></NavLink>

      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/charity"><span>Charity</span></NavLink>

    </div>
  );
};

const mapStateToProps = state => ({
  authname: state.auth.authname,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(LeftNav);