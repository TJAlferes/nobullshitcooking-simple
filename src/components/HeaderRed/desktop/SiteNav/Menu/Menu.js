import React, { useState, useLayoutEffect } from 'react';
import { connect } from 'react-redux';

import MenuView from './MenuView';

/*
This Menu component heavily borrows from react-menu-aim
which is a React mixin heavily inspired by jQuery-menu-aim
All rights reserved by the original authors.
https://github.com/jasonslyvia/react-menu-aim
https://github.com/kamens/jQuery-menu-aim
*/

const MOUSE_LOCS_TRACKED = 3;  // number of past mouse locations to track
const DELAY = 200;             // ms delay when user appears to be entering submenu
const TOLERANCE = 50;          // bigger = more forgivey when entering submenu

function offset(el) {
  if (!el) return {left: 0, top: 0};
  let rect = el.getBoundingClientRect();
  return {
    left: rect.left + document.body.scrollLeft,
    top: rect.top + document.body.scrollTop,
  };
}

function outerWidth(el) {
  let _width = el.offsetWidth;
  let style = el.currentStyle || getComputedStyle(el);
  _width += (parseInt(style.marginLeft, 10) || 0);
  return _width;
}

function outerHeight(el) {
  let _height = el.offsetHeight;
  let style = el.currentStyle || getComputedStyle(el);
  _height += (parseInt(style.marginLeft, 10) || 0);
  return _height;
}

export const Menu = ({ theme, menuData }) => {
  const [ activeMenuIndex, setActiveMenuIndex ] = useState();

  let menuConfig = {delay: 300, tolerance: 75};
  let menuTimer;
  let _lastDelayLoc;
  let mouseLocs = [];

  useLayoutEffect(() => {
    document.addEventListener('mousemove', handleMouseMoveDocument, false);
    return () => {
      document.removeEventListener('mousemove', handleMouseMoveDocument);
      mouseLocs = [];
      clearTimeout(menuTimer);
      menuTimer = null;
    };
  });

  function getActivateDelay(config) {
    let menu = document.querySelector('.menu');  // do you need findDOMNode? or a ref?

    let menuOffset = offset(menu);

    let upperLeft = {
      x: menuOffset.left,
      y: menuOffset.top - (config.tolerance || TOLERANCE)
    };

    let upperRight = {x: menuOffset.left + outerWidth(menu), y: upperLeft.y};

    let lowerLeft = {
      x: menuOffset.left,
      y: menuOffset.top + outerHeight(menu) + (config.tolerance || TOLERANCE)
    };

    let lowerRight = {x: menuOffset.left + outerWidth(menu), y: lowerLeft.y};

    let loc = mouseLocs[mouseLocs.length - 1];

    let prevLoc = mouseLocs[0];
  
    if (!loc) return 0;

    if (!prevLoc) prevLoc = loc;

    if (
      prevLoc.x < menuOffset.left ||
      prevLoc.x > lowerRight.x ||
      prevLoc.y < menuOffset.top ||
      prevLoc.y > lowerRight.y
    ) {
      return 0;
    }

    if (
      _lastDelayLoc &&
      loc.x === _lastDelayLoc.x &&
      loc.y === _lastDelayLoc.y
    ) {
      return 0;
    }

    function slope(a, b) {
      return (b.y - a.y) / (b.x - a.x);
    }
  
    let decreasingCorner = upperRight;
    let increasingCorner = lowerRight;
    let decreasingSlope = slope(loc, decreasingCorner);
    let increasingSlope = slope(loc, increasingCorner);
    let prevDecreasingSlope = slope(prevLoc, decreasingCorner);
    let prevIncreasingSlope = slope(prevLoc, increasingCorner);
  
    if (
      decreasingSlope < prevDecreasingSlope &&
      increasingSlope > prevIncreasingSlope
    ) {
      _lastDelayLoc = loc;
      return config.delay || DELAY;
    }

    _lastDelayLoc = null;
    
    return 0;
  }

  function possiblyActivate(rowIdentifier, handler, config) {
    const delay = getActivateDelay(config);

    if (delay) {
      menuTimer = setTimeout(() => {
        possiblyActivate.call(this, rowIdentifier, handler, config);
      }, delay);
      return;
    }

    handler(rowIdentifier);
  }

  const handleMouseMoveDocument = e => {
    mouseLocs.push({x: e.pageX, y: e.pageY});
    if (mouseLocs.length > MOUSE_LOCS_TRACKED) mouseLocs.shift();
  }
  
  const handleMouseEnterRow = (rowIdentifier, handler) => {
    if (menuTimer) clearTimeout(menuTimer);
    possiblyActivate(rowIdentifier, handler, menuConfig);
  }

  const handleMouseLeaveMenu = () => {
    if (menuTimer) clearTimeout(menuTimer);
  }

  const handleSwitchMenuIndex = index => setActiveMenuIndex(index);

  return (
    <MenuView
      theme={theme}
      menuData={menuData}
      activeMenuIndex={activeMenuIndex}
      handleMouseEnterRow={handleMouseEnterRow}
      handleMouseLeaveMenu={handleMouseLeaveMenu}
      handleSwitchMenuIndex={handleSwitchMenuIndex}
    />
  );
};

const mapStateToProps = state => ({theme: state.theme.dropDownMenuTheme});

export default connect(mapStateToProps)(Menu);