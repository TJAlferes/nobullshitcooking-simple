/*
FancyMenu is heavily inspired by react-menu-aim
which is a React Mixin heavily inspired by jQuery-menu-aim
All rights reserved by the original authors.
https://github.com/jasonslyvia/react-menu-aim
https://github.com/kamens/jQuery-menu-aim
*/

import ReactDOM from 'react-dom';

const MOUSE_LOCS_TRACKED = 3;   // number of past mouse locations to track
const DELAY = 300;              // ms delay when user appears to be entering submenu
const TOLERANCE = 75;           // bigger = more forgivey when entering submenu


// DOM helpers

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


// Util helpers

// Consider multiple instance using ReactMenuAim, we just listen mousemove once
let mousemoveListener = 0;
let mouseLocs = [];

// Mousemove handler on document
function handleMouseMoveDocument(e) {
  mouseLocs.push({x: e.pageX, y: e.pageY});
  if (mouseLocs.length > MOUSE_LOCS_TRACKED) mouseLocs.shift();
}

function getActivateDelay(config = {}) {
  let menu = ReactDOM.findDOMNode(this);
  if (!menu || !menu.querySelector) return 0;  // If can't find any DOM node
  menu = config.menuSelector ? menu.querySelector(config.menuSelector) : menu;
  let menuOffset = offset(menu);
  let upperLeft = {x: menuOffset.left, y: menuOffset.top - (config.tolerance || TOLERANCE)};
  let upperRight = {x: menuOffset.left + outerWidth(menu), y: upperLeft.y};
  let lowerLeft = {x: menuOffset.left, y: menuOffset.top + outerHeight(menu) + (config.tolerance || TOLERANCE)};
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
    this._lastDelayDoc &&
    loc.x === this._lastDelayDoc.x &&
    loc.y === this._lastDelayDoc.y
  ) {
    return 0;
  }

  function slope(a, b) {
    return (b.y - a.y) / (b.x - a.x);
  }

  let decreasingCorner = upperRight;
  let increasingCorner = lowerRight;
  if (config.submenuDirection === 'left') {
    decreasingCorner = lowerLeft;
    increasingCorner = upperLeft;
  } else if (config.submenuDirection === 'below') {
    decreasingCorner = lowerRight;
    increasingCorner = lowerLeft;
  } else if (config.submenuDirection === 'above') {
    decreasingCorner = upperLeft;
  }
  let decreasingSlope = slope(loc, decreasingCorner);
  let increasingSlope = slope(loc, increasingCorner);
  let prevDecreasingSlope = slope(prevLoc, decreasingCorner);
  let prevIncreasingSlope = slope(prevLoc, increasingCorner);

  if (decreasingSlope < prevDecreasingSlope && increasingSlope > prevIncreasingSlope) {
    this._lastDelayLoc = loc;
    return config.delay || DELAY;
  }
  this._lastDelayLoc = null;
  return 0;
}

function activate(rowIdentifier, handler) {
  handler.call(this, rowIdentifier);
}

function possiblyActivate(rowIdentifier, handler, config) {
  let delay = getActivateDelay.call(this, config);
  if (delay) {
    this.__reactMenuAimTimer = setTimeout(() => {
      possiblyActivate.call(this, rowIdentifier, handler, config);
    }, delay);
  } else {
    activate.call(this, rowIdentifier, handler);
  }
}


// Exports

export default {
  initMenuAim: function(options) {
    __reactMenuAimConfig = options;
  },
  __getMouseMoveDocumentHandler: function() {
    if (__mouseMoveDocumentHandler === 'undefined') {
      const __mouseMoveDocumentHandler = handleMouseMoveDocument.bind(this);
    }
    return __mouseMoveDocumentHandler;
  },
  handleMouseLeaveMenu: function(handler, e) {
    if (__reactMenuAimTimer) clearTimeout(__reactMenuAimTimer);
    if (typeof handler === 'function') handler.call(this, e);
  },
  handleMouseEnterRow: function(rowIdentifier, handler) {
    if (__reactMenuAimTimer) clearTimeout(__reactMenuAimTimer);
    possiblyActivate.call(this, rowIdentifier, handler, __reactMenuAimConfig);
  }
}





/*export function initMenuAim(options) {
  this.__reactMenuAimConfig = options;
}

export function __getMouseMoveDocumentHandler() {
  if (!this.__mouseMoveDocumentHandler) {
    this.__mouseMoveDocumentHandler = handleMouseMoveDocument.bind(this);
  }
  return this.__mouseMoveDocumentHandler;
}*/

/*export function componentDidMount() {
  if (mousemoveListener === 0) document.addEventListener('mousemove', this.__getMouseMoveDocumentHandler(), false);
  mousemoveListener += 1;
}

export function componentWillUnmount() {
  mousemoveListener -= 1;
  if (mousemoveListener === 0) {
    document.removeEventListener('mousemove', this.__getMouseMoveDocumentHandler());
    mouseLocs = [];
  }
  clearTimeout(this.__reactMenuAimTimer);
  this.__reactMenuAimTimer = null;
  this.__mouseMoveDocumentHandler = null;
}*/

/*/**
 * @param  {function} handler The true event handler for your app
 * @param  {object}   e       React's synthetic event object
 */
/*export function handleMouseLeaveMenu(handler, e) {
  if (this.__reactMenuAimTimer) clearTimeout(this.__reactMenuAimTimer);
  if (typeof handler === 'function') handler.call(this, e);
}*/

/*/**
 * @param  {number}   rowIdentifier  The identifier of current row, ie. index or name
 * @param  {function} handler        The true event handler for your app
 * @param  {object}   e              React's synthetic event object
 */
/*export function handleMouseEnterRow(rowIdentifier, handler) {
  if (this.__reactMenuAimTimer) clearTimeout(this.__reactMenuAimTimer);
  possiblyActivate.call(this, rowIdentifier, handler, this.__reactMenuAimConfig);
}*/