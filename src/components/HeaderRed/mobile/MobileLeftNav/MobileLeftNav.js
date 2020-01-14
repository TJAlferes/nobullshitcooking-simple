import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './mobileLeftNav.css';

export const MobileLeftNav = ({ theme, isAuthenticated, authname, closeNav }) => {
  const backgroundColor = (theme === "left-nav-light") ? "#ddd" : "#444";

  const MobileLeftNavLink = ({ to, text, closeNav }) => (
    <NavLink
      className="mobile-left-nav-link"
      activeStyle={{backgroundColor}}
      onTouchEnd={() => {
        closeNav(to);
      }}
      to={to}
    >
      {`${text}`}
    </NavLink>
  );

  return (
    <div className="mobile-left-nav">
      <MobileLeftNavLink to="/food" text="Food" closeNav={closeNav} />
      <MobileLeftNavLink to="/fitness" text="Fitness" closeNav={closeNav} />
      {/*<MobileLeftNavLink to="/store/storefront" text="Supply" closeNav={closeNav} />*/}
      <hr />
      {/*<MobileLeftNavLink to="/welcome" text="New? Start Here" closeNav={closeNav} />*/}
      <MobileLeftNavLink to="/site/help" text="Help" closeNav={closeNav} />
      {!isAuthenticated && <MobileLeftNavLink to="/user/register" text="Create Account" closeNav={closeNav} />}
      {isAuthenticated && <MobileLeftNavLink to="/user/dashboard" text={authname} closeNav={closeNav} />}
      <hr />
      <NavLink
        className="mobile-left-nav-link"
        activeStyle={{backgroundColor}}
        onTouchEnd={() => {
          closeNav('/');
        }}
        to="/"
        exact
      >
        News
      </NavLink>
      {isAuthenticated && <MobileLeftNavLink to="/user/messenger" text="Messenger" closeNav={closeNav} />}
      {isAuthenticated && <MobileLeftNavLink to="/user/friends" text="Friends" closeNav={closeNav} />}
      <hr />
      <MobileLeftNavLink to="/food/nutrition/supplements" text="Supplements" closeNav={closeNav} />
      {/*<MobileLeftNavLink to="/supply/kitchen-equipment" text="Equipment" closeNav={closeNav} />*/}
      <hr />
      <MobileLeftNavLink to="/supply/water-filtration" text="Water Filtration" closeNav={closeNav} />
      <MobileLeftNavLink to="/supply/tea" text="Tea" closeNav={closeNav} />
      <MobileLeftNavLink to="/supply/coffee" text="Coffee" closeNav={closeNav} />
      <hr />
      <MobileLeftNavLink to="/supply/outdoors" text="Outdoors" closeNav={closeNav} />
      <MobileLeftNavLink to="/supply/garden" text="Garden" closeNav={closeNav} />
      <MobileLeftNavLink to="/supply/tools" text="Tools" closeNav={closeNav} />
      <hr />
      {/*
        <MobileLeftNavLink to="/contests" text="Contest Winners" closeNav={closeNav} />
        <MobileLeftNavLink to="/seasonal" text="Seasonal" closeNav={closeNav} />
        <hr />
      */}
      <MobileLeftNavLink to="/charity" text="Charity" closeNav={closeNav} />
    </div>
  );
};

const mapStateToProps = state => ({
  authname: state.auth.authname,
  isAuthenticated: state.auth.isAuthenticated,
  theme: state.theme.leftNavTheme
});

export default connect(mapStateToProps)(MobileLeftNav);