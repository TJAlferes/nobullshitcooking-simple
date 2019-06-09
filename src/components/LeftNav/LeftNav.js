import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './leftNav.css';

const LeftNav = props => {
  const { authname, isAuthenticated, theme } = props;
  let backgroundColor = (theme === "left-nav-light") ? "#ddd" : "#444";
  return (
    <div className={`left_nav ${theme}`}>

      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/dashboard"><span>Dashboard</span></NavLink>
        : <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/user/dashboard"><span>{authname}</span></NavLink>
      }
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/planner"><span id="planner_span">Planner</span></NavLink>
        : <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/user/planner"><span id="planner_span">Planner</span></NavLink>
      }

      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/" exact><span id="home_span">News</span></NavLink>
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/messenger"><span>Messenger</span></NavLink>
        : <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/user/messenger"><span id="messenger_span">Messenger</span></NavLink>
      }
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/friends"><span>Friends</span></NavLink>
        : <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/user/friends"><span>Friends</span></NavLink>
      }

      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/food/nutrition/supplements"><span id="supplements_span">Supplements</span></NavLink>
      <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/supply/kitchen-equipment"><span>Equipment</span></NavLink>

      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/supply/"><span>Water Filtration</span></NavLink>
      <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/supply/tea"><span>Tea</span></NavLink>
      <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/supply/coffee"><span>Coffee</span></NavLink>

      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/supply/outdoors"><span>Outdoors</span></NavLink>
      <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/supply/garden"><span>Garden</span></NavLink>
      <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/supply/tools"><span>Tools</span></NavLink>

      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/contests"><span>Contest Winners</span></NavLink>
      <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/seasonal"><span>Food for Summer</span></NavLink>

      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor}} to="/charity"><span>Charity</span></NavLink>

    </div>
  );
};

const mapStateToProps = state => ({
  authname: state.auth.authname,
  isAuthenticated: state.auth.isAuthenticated,
  theme: state.theme.leftNavTheme
});

export default connect(mapStateToProps)(LeftNav);