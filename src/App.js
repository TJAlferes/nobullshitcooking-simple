import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MobileHeaderRed from './components/HeaderRed/mobile/MobileHeaderRed';
import HeaderRed from './components/HeaderRed/HeaderRed';
import MainWhite from './components/MainWhite/MainWhite';
import FooterGray from './components/FooterGray/FooterGray';
import RoutesList from './routing/Routes';
import './app.css';

export const App = ({ location, theme }) => {
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
    layout = <div><RoutesList /></div>;
  } else {
    // ... Otherwise, render the normal layout
    layout = (
      <div id="app">
        <div>
          <div className="mobile_display">
            <MobileHeaderRed theme={theme} />
          </div>
          <div className="desktop_display">
            <HeaderRed theme={theme} />
          </div>
        </div>
        <MainWhite location={location}>
          <RoutesList />
        </MainWhite>
        <FooterGray />
      </div>
    );
  }

  return layout;
}

const mapStateToProps = state => ({theme: state.theme.headerTheme});

export default withRouter(connect(mapStateToProps)(App));