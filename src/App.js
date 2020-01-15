import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MobileHeaderRed from './components/HeaderRed/mobile/MobileHeaderRed';
import HeaderRed from './components/HeaderRed/desktop/HeaderRed';
import MainWhite from './components/MainWhite/MainWhite';
import FooterGray from './components/FooterGray/FooterGray';

import RoutesList from './routing/Routes';

import './app.css';

export const App = ({ location, headerTheme, footerTheme }) => {
  // Determine if the user is currently at an authentication page...
  let userIsAtAuthPage = location.pathname &&
  (
    location.pathname.match(/^\/staff\/register/) ||
    location.pathname.match(/^\/staff\/login/) ||
    location.pathname.match(/^\/user\/register/) ||
    location.pathname.match(/^\/user\/login/)
  );

  let layout;

  if (userIsAtAuthPage) {
    // ... If they are, then render authentication pages layout
    layout = (
      <div data-test="component-App"><RoutesList /></div>
    );
  } else {
    // ... Otherwise, render the normal layout
    layout = (
      <div data-test="component-App" id="app">
        <div>
          <div className="mobile_display">
            <MobileHeaderRed
              data-test="component-MobileHeaderRed"
              theme={headerTheme}
            />
          </div>
          <div className="desktop_display">
            <HeaderRed data-test="component-HeaderRed" theme={headerTheme} />
          </div>
        </div>
        <MainWhite data-test="component-MainWhite" location={location}>
          <RoutesList />
        </MainWhite>
        <FooterGray data-test="component-FooterGray" theme={footerTheme} />
      </div>
    );
  }

  return layout;
}

const mapStateToProps = state => ({
  headerTheme: state.theme.headerTheme,
  footerTheme: state.theme.footerTheme
});

export default withRouter(connect(mapStateToProps)(App));