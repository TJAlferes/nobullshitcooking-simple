import React, { useState, useLayoutEffect } from 'react';
//import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './menu.css';
import NutritionSlideImage from '../../../../assets/images/header/dropdowns/steve-reeves-nutrition-slide.png';
import MethodsSlideImage from '../../../../assets/images/header/dropdowns/fire-methods-slide.png';
import IngredientsSlideImage from '../../../../assets/images/header/dropdowns/abundance-ingredients-slide.png';
import CuisinesSlideImage from '../../../../assets/images/header/dropdowns/world-map-cuisines-slide.png';
import PrinciplesSlideImage from '../../../../assets/images/header/dropdowns/vitruvian-man-principles-slide.png';
import ExercisesSlideImage from '../../../../assets/images/header/dropdowns/pushups-exercises-slide.png';
import KitchenEquipmentSlideImage from '../../../../assets/images/header/dropdowns/kitchen-equipment-slide.png';

/*
FancyMenu is heavily inspired by react-menu-aim
which is a React Mixin heavily inspired by jQuery-menu-aim
All rights reserved by the original authors.
https://github.com/jasonslyvia/react-menu-aim
https://github.com/kamens/jQuery-menu-aim
*/
const MOUSE_LOCS_TRACKED = 3;   // number of past mouse locations to track
const DELAY = 200;              // ms delay when user appears to be entering submenu
const TOLERANCE = 50;           // bigger = more forgivey when entering submenu

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

const Menu = props => {
  const [activeMenuIndex, setActiveMenuIndex] = useState();
  //useFancyMenu ?
  //const getDefaultProps = () => ({submenuDirection: 'right'});
  //const getInitialState = () => ({activeMenuIndex: 0});
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
    /*let menu = ReactDOM.findDOMNode(this);
    if (!menu || !menu.querySelector) return 0;  // If can't find any DOM node
    menu = config.menuSelector ? menu.querySelector(config.menuSelector) : menu;*/
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
    //let delay = getActivateDelay(config);
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
      __mouseMoveDocumentHandler = handleMouseMoveDocument.bind(this);  // ???
    }
    return __mouseMoveDocumentHandler;
  }
  
  function handleMouseLeaveMenu(handler, e) {
    if (__reactMenuAimTimer) clearTimeout(__reactMenuAimTimer);
    if (typeof handler === 'function') handler.call(this, e);
  }
  
  const handleMouseEnterRow = (rowIdentifier, handler) => {
    if (__reactMenuAimTimer) clearTimeout(__reactMenuAimTimer);
    //possiblyActivate.call(this, rowIdentifier, handler, __reactMenuAimConfig);
    possiblyActivate(rowIdentifier, handler, __reactMenuAimConfig);
  }

  useLayoutEffect(() => {  // useEffect() ???
    // config
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
  }

  let containerClassName = 'menu-container ' + props.submenuDirection;

  return (
    <div className={containerClassName}>
      <div className="menu" onMouseLeave={handleMouseLeaveMenu}>
        <ul>
          {props.menuData.map((menu, index) => {
            let className = 'menu-item';
            if (activeMenuIndex !== undefined && index === activeMenuIndex) className += ' active';
            return (
              <li
                className={className}
                key={index}
                onMouseEnter={() => { handleMouseEnterRow(index, handleSwitchMenuIndex) }}
              >
                <Link to={menu.link}>{menu.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sub-menu">
        {activeMenuIndex !== undefined && <h3><Link to={props.menuData[activeMenuIndex].link}>{props.menuData[activeMenuIndex].name}</Link></h3>}
        <ul>
          {activeMenuIndex !== undefined && props.menuData[activeMenuIndex].subMenu.map((subMenu, index) => 
            <li className="sub-menu-item" key={index}><Link to={props.menuData[activeMenuIndex].subMenuLinks[index]}>{subMenu}</Link></li>
          )}
        </ul>
        {(activeMenuIndex !== undefined && props.menuData[activeMenuIndex].image === 'nutrition') && <img src={NutritionSlideImage} />}
        {(activeMenuIndex !== undefined && props.menuData[activeMenuIndex].image === 'methods') && <img src={MethodsSlideImage} />}
        {(activeMenuIndex !== undefined && props.menuData[activeMenuIndex].image === 'ingredients') && <img src={IngredientsSlideImage} />}
        {(activeMenuIndex !== undefined && props.menuData[activeMenuIndex].image === 'cuisines') && <img src={CuisinesSlideImage} />}
        {(activeMenuIndex !== undefined && props.menuData[activeMenuIndex].image === 'principles') && <img src={PrinciplesSlideImage} />}
        {(activeMenuIndex !== undefined && props.menuData[activeMenuIndex].image === 'exercises') && <img src={ExercisesSlideImage} />}
        {(activeMenuIndex !== undefined && props.menuData[activeMenuIndex].image === 'kitchen-equipment') && <img src={KitchenEquipmentSlideImage} />}
      </div>
    </div>
  );
};

export default Menu;