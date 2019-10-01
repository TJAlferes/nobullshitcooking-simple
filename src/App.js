import React from 'react';
import { withRouter } from 'react-router-dom';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';
import MultiBackend from 'react-dnd-multi-backend';
//import HTML5Backend from 'react-dnd-html5-backend-cjs';
//import TouchBackend from 'react-dnd-touch-backend-cjs';
import { DndProvider } from 'react-dnd-cjs';

import MobileHeaderRed from './components/HeaderRed/mobile/MobileHeaderRed';
import HeaderRed from './components/HeaderRed/HeaderRed';
import MainWhite from './components/MainWhite/MainWhite';
import FooterGray from './components/FooterGray/FooterGray';
import RoutesList from './routing/Routes';
import './app.css';

// TO DO: Either move DnDProvider to index.js, or move other providers here

const App = props => {
  /*

  Decide visual layout style

  */

  // Determine if the user is currently at an authentication page...
  let location = props.location;
  let isAccessing = location.pathname &&
  (
    location.pathname.match(/^\/staff\/register/) ||
    location.pathname.match(/^\/staff\/login/) ||
    location.pathname.match(/^\/user\/register/) ||
    location.pathname.match(/^\/user\/login/)
  );
  let layout = null;

  if (isAccessing) {
    // ... If they are, then render authentication pages layout
    layout = <div><RoutesList /></div>;
  } else {
    // ... Otherwise, render the normal layout
    layout = (
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        <div id="app">
          <div>
            <div className="mobile_display">
              <MobileHeaderRed />
            </div>
            <div className="desktop_display">
              <HeaderRed />
            </div>
          </div>
          <MainWhite location={location}>
            <RoutesList />
          </MainWhite>
          <FooterGray />
        </div>
      </DndProvider>
    );
  }

  return layout;
}

export default withRouter(App);