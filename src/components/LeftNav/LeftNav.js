import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './leftNav.css';

// TO DO: make higher order of NavLink to reduce repetitious attributes below
// TO DO: code split / lazy load

const LeftNav = props => {
  const { authname, isAuthenticated } = props;
  return (
    <div className="left_nav">
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" to="/user/login"><span>Dashboard</span></NavLink>
        : <NavLink className="styled_nav_link" to="/user/dashboard"><span>{authname}</span></NavLink>
      }
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/planner"><span id="planner_span">Planner</span></NavLink>
        : <NavLink className="styled_nav_link" to="/user/planner"><span id="planner_span">Planner</span></NavLink>
      }
      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/" exact><span id="home_span">News</span></NavLink>
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" to="/user/login"><span>Messenger</span></NavLink>
        : <NavLink className="styled_nav_link" to="/user/messenger"><span id="messenger_span">Messenger</span></NavLink>
      }
      {
        !isAuthenticated
        ? <NavLink className="styled_nav_link" to="/user/login"><span>Friends</span></NavLink>
        : <NavLink className="styled_nav_link" to="/user/friends"><span>Friends</span></NavLink>
      }
      <hr />

      <NavLink className="styled_nav_link" activeStyle={{backgroundColor: "#ddd"}} to="/food/nutrition/supplements"><span id="supplements_span">Supplements</span></NavLink>
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

const mapStateToProps = state => ({
  authname: state.auth.authname,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(LeftNav);