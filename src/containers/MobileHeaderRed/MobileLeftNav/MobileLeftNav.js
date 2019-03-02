import React from 'react';
import { NavLink } from 'react-router-dom';

import './mobileLeftNav.css';

// TO DO: make higher order of NavLink to reduce repetitious attributes below

const MobileLeftNav = props => {
  const { closeNav, isAuthenticated, getUser, userEmail } = props;
  return (
    <div id="mobile-left-nav">
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/user/login"><span>Dashboard</span></NavLink>
        : <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/user/dashboard"><span>{userEmail}</span></NavLink>
      }
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/planner')}} activeStyle={{backgroundColor: "#ddd"}} to="/planner"><span id="planner_span">Planner</span></NavLink>
        : <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/user/planner')}} to="/user/planner"><span id="planner_span">Planner</span></NavLink>
      }
      <hr />

      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} activeStyle={{backgroundColor: "#ddd"}} to="/" exact><span id="home_span">News</span></NavLink>
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/user/login"><span>Messenger</span></NavLink>
        : <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/messenger"><span id="messenger_span">Messenger</span></NavLink>
      }
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/user/login"><span>Friends</span></NavLink>
        : <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/user/friends"><span>Friends</span></NavLink>
      }
      <hr />

      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/supplements')}} activeStyle={{backgroundColor: "#ddd"}} to="/supplements"><span id="supplements_span">Supplements</span></NavLink>
      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Equipment</span></NavLink>
      <hr />

      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Water Filtration</span></NavLink>
      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Tea</span></NavLink>
      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Coffee</span></NavLink>
      <hr />

      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Outdoors</span></NavLink>
      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Garden</span></NavLink>
      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Tools</span></NavLink>
      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Weapons</span></NavLink>
      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Finances</span></NavLink>
      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Security</span></NavLink>
      <hr />

      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Contest Winners</span></NavLink>
      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Food for Summer</span></NavLink>
      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Add a Recipe</span></NavLink>
      <hr />

      <NavLink className="styled_nav_link" onTouchEnd={() => { closeNav('/')}} to="/"><span>Charity</span></NavLink>
    </div>
  );
}

export default MobileLeftNav;