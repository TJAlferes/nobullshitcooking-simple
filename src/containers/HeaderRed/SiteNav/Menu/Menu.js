import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './menu.css';
import NutritionSlideImage from '../../../../assets/images/header/dropdowns/steve-reeves-nutrition-slide.png';
import CuisinesSlideImage from '../../../../assets/images/header/dropdowns/world-map-cuisines-slide.png';

/*
FancyMenu is heavily inspired by react-menu-aim
which is a React Mixin heavily inspired by jQuery-menu-aim
All rights reserved by the original authors.
https://github.com/jasonslyvia/react-menu-aim
https://github.com/kamens/jQuery-menu-aim
*/
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
//let mousemoveListener = 0;  // ?
let mouseLocs = [];

// Mousemove handler on document
function handleMouseMoveDocument(e) {
  mouseLocs.push({x: e.pageX, y: e.pageY});
  if (mouseLocs.length > MOUSE_LOCS_TRACKED) mouseLocs.shift();
}

function getActivateDelay(config) {
  //let menu = ReactDOM.findDOMNode(this);
  //console.log(menu);
  //if (!menu || !menu.querySelector) return 0;  // If can't find any DOM node
  let menu = config.menuSelector && document.querySelector(config.menuSelector);
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
    menu._lastDelayDoc &&
    loc.x === menu._lastDelayDoc.x &&
    loc.y === menu._lastDelayDoc.y
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
    menu._lastDelayLoc = loc;
    return config.delay || DELAY;
  }
  menu._lastDelayLoc = null;
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





const Menu = props => {
  const [activeMenuIndex, setActiveMenuIndex] = useState();  // 0?
  //useFancyMenu ?
  //const getDefaultProps = () => ({submenuDirection: 'right'});
  //const getInitialState = () => ({activeMenuIndex: 0});
  let __reactMenuAimConfig;
  let __mouseMoveDocumentHandler;
  let __reactMenuAimTimer;

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
  
  function handleMouseEnterRow(rowIdentifier, handler) {
    console.log('called');
    if (__reactMenuAimTimer) clearTimeout(__reactMenuAimTimer);
    possiblyActivate.call(this, rowIdentifier, handler, __reactMenuAimConfig);
  }

  useLayoutEffect(() => {  // useEffect() ???
    // config (optional?)
    initMenuAim({
      submenuDirection: props.submenuDirection,
      menuSelector: '.menu',
      delay: 300,
      tolerance: 75
    });
    // setup
    let mousemoveListener = 0;  // ?
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

  const handleSwitchMenuIndex = index => {
    setActiveMenuIndex(index);
    // ???
  }

  let containerClassName = 'menu-container ' + props.submenuDirection;
  //let subMenuStyle = {};
  //if (props.submenuDirection === 'below') subMenuStyle.left = activeMenuIndex * 140;

  return (
    <div className={containerClassName}>
      <div className="menu" onMouseLeave={handleMouseLeaveMenu}>
        <ul>
          {props.menuData.map((menu, index) => {
            let className = 'menu-item';
            if (activeMenuIndex && index === activeMenuIndex) className += ' active';
            return (
              <li
                className={className}
                key={index}
                onMouseEnter={() => { handleMouseEnterRow.call(this, index, handleSwitchMenuIndex) }}
              >
                {menu.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sub-menu">
        <h3>{activeMenuIndex && props.menuData[activeMenuIndex].name}</h3>
        <ul>
          {activeMenuIndex && props.menuData[activeMenuIndex].subMenu.map((subMenu, index) => 
            <li className="sub-menu-item" key={index}>{subMenu}</li>
          )}
        </ul>
        {(activeMenuIndex && props.menuData[activeMenuIndex].image === 'nutrition') && <img src={NutritionSlideImage} />}
        {(activeMenuIndex && props.menuData[activeMenuIndex].image === 'methods') && <img src={CuisinesSlideImage} />}
        {(activeMenuIndex && props.menuData[activeMenuIndex].image === 'ingredients') && <img src={NutritionSlideImage} />}
        {(activeMenuIndex && props.menuData[activeMenuIndex].image === 'cuisines') && <img src={CuisinesSlideImage} />}
      </div>
    </div>
  );
};

export default Menu;