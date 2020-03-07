import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import MobileHeaderRed from './components/HeaderRed/mobile/MobileHeaderRed';
import HeaderRed from './components/HeaderRed/desktop/HeaderRed';
import MainWhite from './components/MainWhite/MainWhite';
import FooterGray from './components/FooterGray/FooterGray';

import RoutesList from './routing/Routes';

import './app.css';

export const App = ({ headerTheme, footerTheme }) => {
  const location = useLocation();

  const userIsAtAuthPage = location.pathname &&
  (
    location.pathname.match(/^\/register/) ||
    location.pathname.match(/^\/verify/) ||
    location.pathname.match(/^\/login/)
  );

  return userIsAtAuthPage
  ? <div><RoutesList /></div>
  : (
    <div id="app">
      <div>
        <div className="mobile_display">
          <MobileHeaderRed theme={headerTheme} />
        </div>
        <div className="desktop_display">
          <HeaderRed theme={headerTheme} />
        </div>
      </div>
      <MainWhite location={location}>
        <RoutesList />
      </MainWhite>
      <FooterGray theme={footerTheme} />
    </div>
  );
}

const mapStateToProps = state => ({
  headerTheme: state.theme.headerTheme,
  footerTheme: state.theme.footerTheme
});

export default connect(mapStateToProps)(App);