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

  function LeftNavLink({ dataTest, text, to }: LeftNavLinkProps): JSX.Element {
    return (
      <NavLink
        activeStyle={{backgroundColor}}
        className="left-nav-link"
        data-test={dataTest}
        to={to}
      >
        {`${text}`}
      </NavLink>
    );
  }

  return (
    <nav className={`left-nav ${theme}`}>
      {
        userIsAuthenticated &&
        <LeftNavLink dataTest="dashboard" text={authname} to="/dashboard" />
      }
      {userIsAuthenticated && <hr />}

      <LeftNavLink dataTest="home" text="News" to="/home" />
      {
        userIsAuthenticated &&
        <LeftNavLink dataTest="messenger" text="Messenger" to="/messenger" />
      }
      {
        userIsAuthenticated &&
        <LeftNavLink dataTest="friends" text="Friends" to="/friends" />
      }
      <hr />

      <LeftNavLink
        dataTest="supplements"
        text="Supplements"
        to="/page/guide/food/nutrition/supplements"
      />
      <LeftNavLink
        dataTest="equipment"
        text="Equipment"
        to="/supply/kitchen-equipment"
      />
      <hr />

      <LeftNavLink
        dataTest="filtration"
        text="Water Filtration"
        to="/page/promo/water-filtration"
      />
      <LeftNavLink dataTest="tea" text="Tea" to="/page/promo/tea" />
      <LeftNavLink dataTest="coffee" text="Coffee" to="/page/promo/coffee" />
      <hr />

      <LeftNavLink
        dataTest="outdoors"
        text="Outdoors"
        to="/page/promo/outdoors"
      />
      <LeftNavLink dataTest="garden" text="Garden" to="/page/promo/garden" />
      <LeftNavLink dataTest="tools" text="Tools" to="/page/promo/tools" />
      <hr />

      <LeftNavLink
        dataTest="seasonal"
        text="Seasonal"
        to="/page/promo/seasonal"
      />
      <hr />

      <LeftNavLink dataTest="charity" text="Charity" to="/page/site/charity" />
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
  dataTest: string;
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