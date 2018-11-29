import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './leftNav.css';

const LeftNav = props => {
  const { isAuthenticated, getUser, userEmail } = props;
  return (
    <div className="left_nav">
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" to="/user/login"><span>Dashboard</span></NavLink>
        : <NavLink className="styled_nav_link" to="/user/dashboard"><span>{userEmail}</span></NavLink>
      }
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" to="/planner"><span id="planner_span">Planner</span></NavLink>
        : <NavLink className="styled_nav_link" to="/user/planner"><span id="planner_span">Planner</span></NavLink>
      }
      <hr />

      <NavLink className="styled_nav_link" to="/"><span id="home_span">News</span></NavLink>
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" to="/user/login"><span>Messenger</span></NavLink>
        : <NavLink className="styled_nav_link" to="/messenger"><span id="messenger_span">Messenger</span></NavLink>
      }
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" to="/user/login"><span>Friends</span></NavLink>
        : <NavLink className="styled_nav_link" to="/user/friends"><span>Friends</span></NavLink>
      }
      <hr />

      <NavLink className="styled_nav_link" to="/supplements"><span id="supplements_span">Supplements</span></NavLink>
      <NavLink className="styled_nav_link" to="/"><span>Equipment</span></NavLink>
      <hr />

      <NavLink className="styled_nav_link" to="/"><span>Water Filtration</span></NavLink>
      <NavLink className="styled_nav_link" to="/"><span>Tea</span></NavLink>
      <NavLink className="styled_nav_link" to="/"><span>Coffee</span></NavLink>
      <hr />

      <NavLink className="styled_nav_link" to="/"><span>Outdoors</span></NavLink>
      <NavLink className="styled_nav_link" to="/"><span>Garden</span></NavLink>
      <NavLink className="styled_nav_link" to="/"><span>Tools</span></NavLink>
      <NavLink className="styled_nav_link" to="/"><span>Weapons</span></NavLink>
      <NavLink className="styled_nav_link" to="/"><span>Finances</span></NavLink>
      <NavLink className="styled_nav_link" to="/"><span>Security</span></NavLink>
      <hr />

      <NavLink className="styled_nav_link" to="/"><span>Contest Winners</span></NavLink>
      <NavLink className="styled_nav_link" to="/"><span>Food for Summer</span></NavLink>
      <NavLink className="styled_nav_link" to="/"><span>Add a Recipe</span></NavLink>
      <hr />

      <NavLink className="styled_nav_link" to="/"><span>Charity</span></NavLink>
    </div>
  );
}

export default LeftNav;