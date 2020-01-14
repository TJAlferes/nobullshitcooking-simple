import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './leftNav.css';

export const LeftNav = ({ theme, isAuthenticated, authname }) => {
  const backgroundColor = (theme === "left-nav-light") ? "#ddd" : "#444";

  const LeftNavLink = ({ to, text }) => (
    <NavLink
      className="left-nav-link"
      activeStyle={{backgroundColor}}
      to={to}
    >
      {`${text}`}
    </NavLink>
  );

  return (
    <nav className={`left-nav ${theme}`}>
      {isAuthenticated && <LeftNavLink to="/user/dashboard" text={authname} />}
      {isAuthenticated && <hr />}
      <NavLink
        className="left-nav-link"
        activeStyle={{backgroundColor}}
        to="/"
        exact
      >
        News
      </NavLink>
      {isAuthenticated && <LeftNavLink to="/user/messenger" text="Messenger" />}
      {isAuthenticated && <LeftNavLink to="/user/friends" text="Friends" />}
      <hr />
      <LeftNavLink to="/food/nutrition/supplements" text="Supplements" />
      <LeftNavLink to="/supply/kitchen-equipment" text="Equipment" />
      <hr />
      <LeftNavLink to="/supply/water-filtration" text="Water Filtration" />
      <LeftNavLink to="/supply/tea" text="Tea" />
      <LeftNavLink to="/supply/coffee" text="Coffee" />
      <hr />
      <LeftNavLink to="/supply/outdoors" text="Outdoors" />
      <LeftNavLink to="/supply/garden" text="Garden" />
      <LeftNavLink to="/supply/tools" text="Tools" />
      <hr />
      {/*
        <LeftNavLink to="/contests" text="Contest Winners" />
        <LeftNavLink to="/seasonal" text="Seasonal" />
        <hr />
      */}
      <LeftNavLink to="/charity" text="Charity" />
    </nav>
  );
};

const mapStateToProps = state => ({
  authname: state.auth.authname,
  isAuthenticated: state.auth.isAuthenticated,
  theme: state.theme.leftNavTheme
});

export default connect(mapStateToProps)(LeftNav);