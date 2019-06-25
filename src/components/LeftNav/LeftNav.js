import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './leftNav.css';

const LeftNav = props => {
  const { authname, isAuthenticated, theme } = props;
  let backgroundColor = (theme === "left-nav-light") ? "#ddd" : "#444";
  return (
    <nav className={`left-nav ${theme}`}>

      {
        !isAuthenticated
        ? <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/dashboard"><span>Dashboard</span></NavLink>
        : <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/user/dashboard"><span>{authname}</span></NavLink>
      }
      {
        !isAuthenticated
        ? <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/planner">Planner</NavLink>
        : <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/user/planner">Planner</NavLink>
      }

      <hr />

      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/" exact>News</NavLink>
      {
        !isAuthenticated
        ? <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/messenger">Messenger</NavLink>
        : <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/user/messenger">Messenger</NavLink>
      }
      {
        !isAuthenticated
        ? <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/friends"><span>Friends</span></NavLink>
        : <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/user/friends"><span>Friends</span></NavLink>
      }

      <hr />

      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/food/nutrition/supplements"><span id="supplements_span">Supplements</span></NavLink>
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/kitchen-equipment"><span>Equipment</span></NavLink>

      <hr />

      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/"><span>Water Filtration</span></NavLink>
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/tea"><span>Tea</span></NavLink>
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/coffee"><span>Coffee</span></NavLink>

      <hr />

      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/outdoors"><span>Outdoors</span></NavLink>
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/garden"><span>Garden</span></NavLink>
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/tools"><span>Tools</span></NavLink>

      <hr />

      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/contests"><span>Contest Winners</span></NavLink>
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/seasonal"><span>Food for Summer</span></NavLink>

      <hr />

      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/charity"><span>Charity</span></NavLink>

    </nav>
  );
};

const mapStateToProps = state => ({
  authname: state.auth.authname,
  isAuthenticated: state.auth.isAuthenticated,
  theme: state.theme.leftNavTheme
});

export default connect(mapStateToProps)(LeftNav);