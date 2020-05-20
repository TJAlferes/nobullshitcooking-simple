import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';

import MobileHeaderRed from './components/HeaderRed/mobile/MobileHeaderRed';
import { HeaderRed } from './components/HeaderRed/desktop/HeaderRed';
import { MainWhite } from './components/MainWhite/MainWhite';
import { FooterGray } from './components/FooterGray/FooterGray';
import RoutesList from './routing/Routes';
import './app.css';

export function App({
  headerTheme,
  footerTheme,
  mainTheme,
  breadCrumbsTheme,
  shadow
}: Props): JSX.Element {
  const location = useLocation();

  const userIsAtAuthPage = location.pathname &&
  location.pathname == ("/register" || "/verify" || "/login");

  return userIsAtAuthPage
  ? (
    <div>
      <RoutesList />
    </div>
  ) : (
    <div id="app">
      <div>
        <div className="mobile_display">
          <MobileHeaderRed theme={headerTheme} />
        </div>
        <div className="desktop_display">
          <HeaderRed theme={headerTheme} />
        </div>
      </div>
      <MainWhite
        theme={mainTheme}
        breadCrumbsTheme={breadCrumbsTheme}
        shadow={shadow}
      >
        <RoutesList />
      </MainWhite>
      <FooterGray theme={footerTheme} />
    </div>
  );
}

interface RootState {
  theme: {
    headerTheme: string;
    footerTheme: string;
    mainTheme: string;
    breadCrumbsTheme: string;
  };
  menu: {
    shadow: boolean;
  }
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const mapStateToProps = (state: RootState) => ({
  headerTheme: state.theme.headerTheme,
  footerTheme: state.theme.footerTheme,
  mainTheme: state.theme.mainTheme,
  breadCrumbsTheme: state.theme.breadCrumbsTheme,
  shadow: state.menu.shadow
});

const connector = connect(mapStateToProps, {});

export default connector(App);