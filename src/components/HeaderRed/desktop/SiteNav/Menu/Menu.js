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
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
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



export const Menu = ({
  theme,
  menuData,
  submenuDirection
}) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState();

  let __reactMenuAimConfig;
  let __mouseMoveDocumentHandler;
  let __reactMenuAimTimer;
  let _lastDelayLoc;
  let mouseLocs = [];

  function handleMouseMoveDocument(e) {  // Mousemove handler on document
    mouseLocs.push({x: e.pageX, y: e.pageY});
    if (mouseLocs.length > MOUSE_LOCS_TRACKED) mouseLocs.shift();
  }
  
  function getActivateDelay(config) {
    let menu = config.menuSelector && document.querySelector(config.menuSelector);  // do you need findDOMNode? or a ref?
    let menuOffset = offset(menu);
    let upperLeft = {x: menuOffset.left, y: menuOffset.top - (config.tolerance || TOLERANCE)};
    let upperRight = {x: menuOffset.left + outerWidth(menu), y: upperLeft.y};
    let lowerLeft = {x: menuOffset.left, y: menuOffset.top + outerHeight(menu) + (config.tolerance || TOLERANCE)};
    let lowerRight = {x: menuOffset.left + outerWidth(menu), y: lowerLeft.y};
    let loc = mouseLocs[mouseLocs.length - 1];
    let prevLoc = mouseLocs[0];
  
    if (!loc) return 0;
    if (!prevLoc) prevLoc = loc;
    if (prevLoc.x < menuOffset.left || prevLoc.x > lowerRight.x || prevLoc.y < menuOffset.top || prevLoc.y > lowerRight.y) return 0;
    if (_lastDelayLoc && loc.x === _lastDelayLoc.x && loc.y === _lastDelayLoc.y) return 0;
  
    function slope(a, b) {
      return (b.y - a.y) / (b.x - a.x);
    }
  
    let decreasingCorner = upperRight;
    let increasingCorner = lowerRight;
    let decreasingSlope = slope(loc, decreasingCorner);
    let increasingSlope = slope(loc, increasingCorner);
    let prevDecreasingSlope = slope(prevLoc, decreasingCorner);
    let prevIncreasingSlope = slope(prevLoc, increasingCorner);
  
    if (decreasingSlope < prevDecreasingSlope && increasingSlope > prevIncreasingSlope) {
      _lastDelayLoc = loc;
      return config.delay || DELAY;
    }
    _lastDelayLoc = null;
    return 0;
  }
  
  function activate(rowIdentifier, handler) {
    handler.call(this, rowIdentifier);
  }
  
  function possiblyActivate(rowIdentifier, handler, config) {
    let delay = getActivateDelay.call(this, config);
    if (delay) {
      __reactMenuAimTimer = setTimeout(() => {
        possiblyActivate.call(this, rowIdentifier, handler, config);
      }, delay);
    } else {
      activate.call(this, rowIdentifier, handler);
    }
  }

  function initMenuAim(options) {
    __reactMenuAimConfig = options;
  }
  
  function __getMouseMoveDocumentHandler() {
    if (!__mouseMoveDocumentHandler) {
      __mouseMoveDocumentHandler = handleMouseMoveDocument.bind(this);
    }
    return __mouseMoveDocumentHandler;
  }
  
  function handleMouseLeaveMenu(handler, e) {
    if (__reactMenuAimTimer) clearTimeout(__reactMenuAimTimer);
    if (typeof handler === 'function') handler.call(this, e);
  }
  
  const handleMouseEnterRow = (rowIdentifier, handler) => {
    if (__reactMenuAimTimer) clearTimeout(__reactMenuAimTimer);
    possiblyActivate(rowIdentifier, handler, __reactMenuAimConfig);
  }

  useLayoutEffect(() => {
    // config
    initMenuAim({
      submenuDirection: submenuDirection,
      menuSelector: '.menu',
      delay: 300,
      tolerance: 75
    });
    // setup
    let mousemoveListener = 0;
    if (mousemoveListener === 0) document.addEventListener('mousemove', __getMouseMoveDocumentHandler(), false);
    mousemoveListener += 1;
    // cleanup
    return () => {
      mousemoveListener -= 1;
      if (mousemoveListener === 0) {
        document.removeEventListener('mousemove', __getMouseMoveDocumentHandler());
        mouseLocs = [];
      }
      clearTimeout(__reactMenuAimTimer);
      __reactMenuAimTimer = null;
      __mouseMoveDocumentHandler = null;
    };
  });

  const handleSwitchMenuIndex = index => setActiveMenuIndex(index);

  return (
    <MenuView
      theme={theme}
      menuData={menuData}
      submenuDirection={submenuDirection}
      activeMenuIndex={activeMenuIndex}
      handleMouseEnterRow={handleMouseEnterRow}
      handleMouseLeaveMenu={handleMouseLeaveMenu}
      handleSwitchMenuIndex={handleSwitchMenuIndex}
    />
  );
};

const mapStateToProps = state => ({
  theme: state.theme.dropDownMenuTheme
});

export default connect(mapStateToProps)(Menu);