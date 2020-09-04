import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './leftNav.css';

export function LeftNav({
  authname,
  theme,
  userIsAuthenticated
}: Props): JSX.Element {
  const backgroundColor = theme === "left-nav-light" ? "#ddd" : "#444";

  function LeftNavLink({ text, to }: LeftNavLinkProps): JSX.Element {
    return (
      <NavLink
        activeStyle={{backgroundColor}}
        className="left-nav-link"
        data-test={to}
        to={to}
      >
        {`${text}`}
      </NavLink>
    );
  }

  return (
    <nav className={`left-nav ${theme}`}>
      {userIsAuthenticated && <LeftNavLink text={authname} to="/dashboard" />}
      {userIsAuthenticated && <hr />}

      <LeftNavLink text="News" to="/home" />
      {userIsAuthenticated && <LeftNavLink text="Messenger" to="/messenger" />}
      {userIsAuthenticated && <LeftNavLink text="Friends" to="/friends" />}
      <hr />

      <LeftNavLink
        text="Supplements"
        to="/page/guide/food/nutrition/supplements"
      />
      <LeftNavLink text="Equipment" to="/supply/kitchen-equipment" />
      <hr />

      <LeftNavLink text="Water Filtration" to="/page/promo/water-filtration" />
      <LeftNavLink text="Tea" to="/page/promo/tea" />
      <LeftNavLink text="Coffee" to="/page/promo/coffee" />
      <hr />

      <LeftNavLink text="Outdoors" to="/page/promo/outdoors" />
      <LeftNavLink text="Garden" to="/page/promo/garden" />
      <LeftNavLink text="Tools" to="/page/promo/tools" />
      <hr />

      <LeftNavLink text="Seasonal" to="/page/promo/seasonal" />
      <hr />

      <LeftNavLink text="Charity" to="/page/site/charity" />
    </nav>
  );
}

interface RootState {
  auth: {
    authname: string;
    userIsAuthenticated: boolean;
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
  theme: state.theme.leftNavTheme,
  userIsAuthenticated: state.auth.userIsAuthenticated
});

const connector = connect(mapStateToProps, {});

export default connector(LeftNav);