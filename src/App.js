import React from 'react';
import { withRouter } from 'react-router-dom';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';
import { DragDropContext } from 'react-dnd';

import MobileHeaderRed from './components/HeaderRed/mobile/MobileHeaderRed';
import HeaderRed from './components/HeaderRed/HeaderRed';
import MainWhite from './components/MainWhite/MainWhite';
import FooterGray from './components/FooterGray/FooterGray';
import RoutesList from './routing/Routes';
import './app.css';

const withDragDropContext = DragDropContext(MultiBackend(HTML5toTouch));

const App = props => {
  // Decide visual layout style:
  // 1. Determine if the user is currently at an authentication page
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
    // 2a. If they are, then render authentication pages layout
    layout = <div><RoutesList /></div>;
  } else {
    // 2b. Otherwise, render the normal layout
    //<div id="app" {...props}>
    layout = (
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
    );
  }
  return layout;
}

export default withRouter(withDragDropContext(App));