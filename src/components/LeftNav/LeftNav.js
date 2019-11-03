import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './leftNav.css';

const LeftNav = props => {
  const { authname, isAuthenticated, theme } = props;
  let backgroundColor = (theme === "left-nav-light") ? "#ddd" : "#444";
  return (
    <nav className={`left-nav ${theme}`}>
      {isAuthenticated && <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/user/dashboard">{authname}</NavLink>}
      {isAuthenticated && <hr />}
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/" exact>News</NavLink>
      {isAuthenticated && <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/user/messenger">Messenger</NavLink>}
      {isAuthenticated && <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/user/friends">Friends</NavLink>}
      <hr />
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/food/nutrition/supplements">Supplements</NavLink>
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/kitchen-equipment">Equipment</NavLink>
      <hr />
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/water-filtration">Water Filtration</NavLink>
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/tea">Tea</NavLink>
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/coffee">Coffee</NavLink>
      <hr />
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/outdoors">Outdoors</NavLink>
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/garden">Garden</NavLink>
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/supply/tools">Tools</NavLink>
      <hr />
      {/*
        <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/contests">Contest Winners</NavLink>
        <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/seasonal">Food for Summer</NavLink>
        <hr />
      */}
      <NavLink className="left-nav-link" activeStyle={{backgroundColor}} to="/charity">Charity</NavLink>
    </nav>
  );
};

const mapStateToProps = state => ({
  authname: state.auth.authname,
  isAuthenticated: state.auth.isAuthenticated,
  theme: state.theme.leftNavTheme
});

export default connect(mapStateToProps)(LeftNav);