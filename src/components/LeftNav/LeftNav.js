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
      <LeftNavLink to="/promo/water-filtration" text="Water Filtration" />
      <LeftNavLink to="/promo/tea" text="Tea" />
      <LeftNavLink to="/promo/coffee" text="Coffee" />
      <hr />
      <LeftNavLink to="/promo/outdoors" text="Outdoors" />
      <LeftNavLink to="/promo/garden" text="Garden" />
      <LeftNavLink to="/promo/tools" text="Tools" />
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