import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './mobileLeftNav.css';

// TO DO: make higher order of NavLink to reduce repetitious attributes below

const MobileLeftNav = props => {
  const { closeNav, authname, isAuthenticated, theme } = props;
  let backgroundColor = (theme === "left-nav-light") ? "#ddd" : "#444";
  return (
    <div className="mobile-left-nav">
      <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/food')}} to="/food">Food</NavLink>
      <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/fitness')}} to="/fitness">Fitness</NavLink>
      {/*<NavLink className="mobile-left-nav-link" to="/store/storefront">Supply</NavLink>*/}
      <hr />
      {/*<NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/welcome')}} to="/welcome">New? Start Here</NavLink>*/}
      <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/site/help')}} to="/site/help">Help</NavLink>
      {!isAuthenticated && <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/user/register')}} to="/user/register">Create Account</NavLink>}
      {isAuthenticated && <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/user/dashboard')}} to="/user/dashboard">{authname}</NavLink>}
      <hr />
      <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/')}} to="/" exact>News</NavLink>
      {isAuthenticated && <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/user/messenger')}} to="/user/messenger">Messenger</NavLink>}
      {isAuthenticated && <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/user/friends')}} to="/user/friends">Friends</NavLink>}
      <hr />
      <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/food/nutrition/supplements')}} to="/food/nutrition/supplements">Supplements</NavLink>
      {/*<NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/supply/kitchen-equipment')}} to="/supply/kitchen-equipment">Equipment</NavLink>*/}
      <hr />
      <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/supply/water-filtration')}} to="/supply/water-filtration">Water Filtration</NavLink>
      <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/supply/tea')}} to="/supply/tea">Tea</NavLink>
      <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/supply/coffee')}} to="/supply/coffee">Coffee</NavLink>
      <hr />
      <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/supply/outdoors')}} to="/supply/outdoors">Outdoors</NavLink>
      <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/supply/garden')}} to="/supply/garden">Garden</NavLink>
      <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/supply/tools')}} to="/supply/tools">Tools</NavLink>
      <hr />
      {/*
        <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/contests')}} to="/contests">Contest Winners</NavLink>
        <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/seasonal')}} to="/seasonal">Food for Summer</NavLink>
        <hr />
      */}
      <NavLink className="mobile-left-nav-link" activeStyle={{backgroundColor}} onTouchEnd={() => { closeNav('/')}} to="/">Charity</NavLink>
    </div>
  );
}

const mapStateToProps = state => ({
  authname: state.auth.authname,
  isAuthenticated: state.auth.isAuthenticated,
  theme: state.theme.leftNavTheme
});

export default connect(mapStateToProps)(MobileLeftNav);