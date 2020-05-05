import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import './leftNav.css';

export function LeftNav({
  theme,
  isAuthenticated,
  authname
}: Props): JSX.Element {
  const backgroundColor = (theme === "left-nav-light") ? "#ddd" : "#444";

  function LeftNavLink({ to, text }: LeftNavLinkProps): JSX.Element {
    return (
      <NavLink
        className="left-nav-link"
        activeStyle={{backgroundColor}}
        to={to}
      >
        {`${text}`}
      </NavLink>
    );
  }

  return (
    <nav className={`left-nav ${theme}`}>
      {isAuthenticated && <LeftNavLink to="/dashboard" text={authname} />}
      {isAuthenticated && <hr />}
      <NavLink
        className="left-nav-link"
        activeStyle={{backgroundColor}}
        to="/"
        exact
      >
        News
      </NavLink>
      {isAuthenticated && <LeftNavLink to="/messenger" text="Messenger" />}
      {isAuthenticated && <LeftNavLink to="/friends" text="Friends" />}
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

interface RootState {
  auth: {
    authname: string;
    isAuthenticated: string;
  };
  theme: {
    leftNavTheme: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

type LeftNavLinkProps = {
  to: string;
  text: string;
};

const mapStateToProps = (state: RootState) => ({
  authname: state.auth.authname,
  isAuthenticated: state.auth.isAuthenticated,
  theme: state.theme.leftNavTheme
});

const connector = connect(mapStateToProps);

export default connector(LeftNav);